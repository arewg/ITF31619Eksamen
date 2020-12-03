import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const createArticle = async (data) => Article.create(data);

export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();
}