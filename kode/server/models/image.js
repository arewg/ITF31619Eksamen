
/**
 * Denne er hentet direkte fra Marius Wallins forelesning 'Leksjon 13'
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSchema = new Schema(
    {
        file_path: {
            type: String,
            required: true,
        },
        file_mimetype: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

ImageSchema.virtual('articles', {
    ref: 'Article',
    localField: '_id',
    foreignField: 'image',
    justOne: false,
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;