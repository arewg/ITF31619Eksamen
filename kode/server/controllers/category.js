/**
 * Controllerne brukt i prosjektet er basert på de vi har lært fra Marius Wallins' forelesning 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.
 */
import { categoryService } from '../services/index.js';

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

