import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const {Schema} = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Vennligst skriv inn epost"],
            unique: true,
            validate: [validator.isEmail, 'Eposten er ikke gyldig']
        },
        password: {
            type: String,
            required: [true, 'Vennligst skriv inn passord'],
            minlength: [6, 'Passordet må minimum ha 6 karakterer'],
            select: false,
            
        },
        role: {
            type: String,
            default : "admin"
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true} }
);

    UserSchema.pre('save', async function (next) {
        this.password = await argon2.hash(this.password);
        next();
    });
    
    UserSchema.virtual('articles', {
        ref: 'Article',
        localField: '_id',
        foreignField: 'user',
        justOne: false,
    });

const User = mongoose.model('User', UserSchema);

export default User;