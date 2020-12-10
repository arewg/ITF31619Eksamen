/**
 * Controllerne brukt i prosjektet er basert på de vi har lært fra Marius Wallins' forelesning 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.
 */
import { userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const get = async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    if(!user) {
        return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json(user);
};

export const list = async (req, res, next) => {
        const result = await userService.listUsers();
        res.status(200).json(result)
    }

export const create = async (req, res, next) => {
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: 'Error creating user'});
    }
};

export const remove = catchAsyncErrors(async (req, res, next) => {
    let user = await userService.getUserById(req.params.id);
    if(!user) {
        return next(
            new ErrorHandler(`Finner ikke bruker med ID: ${req.params.id} i remove i controllers/user.js`)
        );
    }
    user = await userService.removeUser(req.params.id);
    res.status(204).json({})
})