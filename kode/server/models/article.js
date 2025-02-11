import mongoose from 'mongoose';

const {Schema} = mongoose;

const ArticleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            min: ['3', 'Tittel må bestå av mer enn 3 tegn'],
            max: ['100', 'Tittelen kan ikke bestå av mer enn 100 tegn' ],
        },
        ingress: {
            type: String,
            required: true,
            min: ['10', 'Ingressen må bestå av mer enn 10 tegn'],
            max: ['150', 'Ingressen kan ikke bestå av mer enn 150 tegn' ],
        },
        content: {
            type: String,
            required: true,
            min: ['10', 'Innholdet må bestå av mer enn 10 tegn'],
            max: ['10000', 'Innholdet kan ikke bestå av mer enn 10000 tegn'],
        },
        date: {
            type: String
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true,
        },
        author: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        image: {
            type: mongoose.Schema.ObjectId,
            ref: 'Image',
            default: '',
        },
        classified: {
            type: String,
            enum: {
                values: ['åpen', 'hemmelig']
            },
            default: 'åpen',
        },
        view: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true} }
);


const Article = mongoose.model('Article', ArticleSchema);

export default Article;