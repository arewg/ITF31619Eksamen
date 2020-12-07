import mongoose from 'mongoose';

const {Schema} = mongoose;

const EmailSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },


        name: {
            type: String,
            required: true,
        },

        message: {
            type:String,
            required: true
        }

    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true} }
    );
   

const Email = mongoose.model('Email', EmailSchema);

export default Email;