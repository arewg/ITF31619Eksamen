import mongoose from 'mongoose';

const {Schema} = mongoose;

const CategorySchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            min: ['2', 'Kategori må bestå av mer enn 2 tegn'],
            max: ['100', 'Kategorien kan ikke bestå av mer enn 100 tegn' ],
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true} }
    );

    CategorySchema.virtual('articles', {
        ref: 'Article',
        localField: '_id',
        foreignField: 'category',
        justOne: false,
    });
   

const Category = mongoose.model('Category', CategorySchema);

export default Category;