import { categoryService, userService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import Category from '../models/category.js';

export const getCategory = async (req, res, next) => {

    const categories = await categoryService.getCategories();
    res.status(200).json(categories);

};

export const create = async (req, res, next) => {

    try{
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({error: 'Error creating category'})
    }
};

