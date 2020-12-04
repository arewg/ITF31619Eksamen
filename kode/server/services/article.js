import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async () => Article.find();

export const createArticle = async (data) => (await Article.create(data)).populate('user', 'email');

export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();
}