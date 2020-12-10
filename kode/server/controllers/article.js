/**
 * Controllerne brukt i prosjektet er basert på de vi har lært fra Marius Wallins' forelesning 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.
 */
import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import Article from '../models/article.js';

export const get = async (req, res, next) => {
    let article = await articleService.getArticleById(req.params.id);
    if(!article) {
        return res.status(404).json({error: 'Article not found'});
    }

    let viewCount = article;
    console.log("HEIEEIEIIEIE" + JSON.stringify(viewCount));
    viewCount.view ++;
    article = await articleService.updateArticle(req.params.id, viewCount);
    res.status(200).json(article);
};

export const listTopTen = async (req, res, next) => {
        const result = await articleService.listTopTen();
        res.status(200).json(result)
    }

export const list = async (req, res, next) => {
    const result = await articleService.listArticlesPage(req.query);
    res.status(200).json(result)
}

export const listByCategory = async (req, res, next) => {
    const result = await articleService.listByCategory(req.params.id);
    res.status(200).json(result);
}

export const listBySearch = async (req, res, next) => {
    const result = await articleService.listBySearch(req.params.title);
    res.status(200).json(result);
}

export const create = async (req, res, next) => {
    try{
        const article = await articleService.createArticle(req.body);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({error: 'Error creating article'});
    }
};

export const update = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params
    let articleToUpdate = req.body
    let article = Article.findById(req.params.id)

    
    article = await articleService.updateArticle( id, articleToUpdate);
    res.status(200).json(article);
});

export const remove = catchAsyncErrors(async (req, res, next) => {
    let article = await articleService.getArticleById(req.params.id);
    if(!article) {
        return next(
            new ErrorHandler(`Finner ikke artikkel med ID: ${req.params.id}`)
        );
    }
    article = await articleService.removeArticle(req.params.id);
    res.status(204).json({})
})