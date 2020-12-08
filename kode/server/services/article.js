import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id).populate('category', 'category');

export const listArticles = async () => Article.find().populate('category', 'category');

export const listByCategory = async (categoryId) => Article.find({category: {$in : categoryId}}).populate('category', 'category');


export const listBySearch = async (search) => Article.find({title: {$regex: search }}).populate('category', 'category');

export const createArticle = async (data) => Article.create(data);

export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();
}

export const updateArticle = async (id, data) => 


  Article.findByIdAndUpdate(id, data, {
    new: false,
    runValidators: true,
    useFindAndModify: true,
  });