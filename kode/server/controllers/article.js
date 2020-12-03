import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
//import Article from '../models/article.js';

export const get = async (req, res, next) => {

    const article = await articleService.getArticleById(req.params.id);
    if(!article) {
        return res.status(404).json({error: 'Article not found'});
    }

    res.status(200).json(article);
};

export const create = async (req, res, next) => {
    try{
        const article = await articleService.createArticle(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({error: 'Error creating article'});
    }
};

export const removeArticle = catchAsyncErrors(async (req, res, next) => {
    let article = await articleService.getArticleById(req.params.id);
    if(!article) {
        return next(
            new ErrorHandler(`Finner ikke artikkel med ID: ${req.params.id} i remove i controllers/article.js`)
        );
    }
    article = await pollService.removeArticle(req.params.id);
    res.status(204).json({})
})