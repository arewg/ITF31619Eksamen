import User from '../models/user.js';


export const getUserByEmail = async (email, usePassword) => {
    console.log("Er i Service user på server" + email);
    if(usePassword){
        return User.findOne(email).select('+password'); 
    }
    return User.findOne(email);
}

export const getUserById = async (id) => User.findById(id);

export const createUser = async (data) => User.create(data);
