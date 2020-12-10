/**
 * Services er satt opp basert på Marius Wallins' forelesninger 
 * gjennom semestert, men blitt modifisert for prosjektet.
 */
import User from '../models/user.js';

export const getUserByEmail = async (email, usePassword) => {
    if(usePassword){
        return User.findOne(email).select('+password'); 
    }
    return User.findOne(email);
}

export const getUserById = async (id) => User.findById(id);

export const createUser = async (data) => User.create(data);
