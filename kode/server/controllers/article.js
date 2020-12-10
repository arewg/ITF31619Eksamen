import { articleService } from '../services/index.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';
import Article from '../models/article.js';

/*
    Metoden her er inspirert av egne obligatoriske oppgaver og forelesers leksjon 11
*/

export const get = async (req, res, next) => {
    const article = await articleService.getArticleById(req.params.id);
    if(!article) {
        return res.status(404).json({error: 'Article not found'});
    }

    res.status(200).json(article);
};

export const list = async (req, res, next) => {
    console.log(JSON.stringify(req.query));
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
    console.log("DETTE ER ID SOM SKAL OPPDATERES I ARTICLE CONTROLLER" + JSON.stringify(articleToUpdate))
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