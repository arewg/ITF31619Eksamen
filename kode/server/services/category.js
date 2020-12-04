import Category from '../models/category.js';

export const getCategories = async () => Category.find();

export const createCategory = async (data) =>  Category.create(data);