import { emailController } from '../controllers/index.js';
import User from '../models/user.js';


export const getUserByEmail = async (email, usePassword) => {
    console.log("Er i Service user på server" + email);
    if(usePassword){
        return User.findOne(email).select('+password'); 
    }
    
    return User.findOne(email);

}

export const getUserById = async (id) => User.findById(id);

//export const listUsers = async () => User.find();

export const createUser = async (data) => User.create(data);

export const removeUser = async (id) => {
    const user = await User.findById(id);
    user.remove();
}