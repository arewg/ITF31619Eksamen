/**
 * Modellen for user baseres på modellen vist i leksjon 11 og leksjon 12 av Marius Wallin
 * 
 */

import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const {Schema} = mongoose;

const UserSchema = new Schema(
    {   
        name : {
        type: String,
        required: [true, "Vennligst skriv inn navn"]
    },
        email: {
            type: String,
            required: [true, "Vennligst skriv inn epost"],
            unique: true,
            validate: [validator.isEmail, 'Eposten er ikke gyldig']
        },
        password: {
            type: String,
            required: [true, 'Vennligst skriv inn passord'],
            minlength: [3, 'Passordet må minimum ha 3 karakterer'],
            select: false,
            
        },
        role: {
            type: String,
            enum : {
                values: ['user', 'admin'],
                message: 'Rolle ikke fylt ut',
            },
            default:'user',
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true} }
);

    UserSchema.pre('save', async function (next) {
        this.password = await argon2.hash(this.password);
        next();
    });

    UserSchema.methods.getJwtToken = function () {
        return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_TIME
        })
    }

    UserSchema.methods.comparePassword = async function (password) {
        const result = argon2.verify(this.password, password);
        return result; 
    }
    
    UserSchema.virtual('articles', {
        ref: 'Article',
        localField: '_id',
        foreignField: 'user',
        justOne: false,
    });

const User = mongoose.model('User', UserSchema);

export default User;