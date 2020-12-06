import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id).populate('category', 'category');

export const listArticles = async () => Article.find().populate('category', 'category');

export const listByCategory = async (categoryId) => Article.find({category: {$in : categoryId}}).populate('category', 'category');


export const listBySearch = async (search) => Article.find({title: {$regex: search }}).populate('category', 'category');

//Tror kanskje denne må ha populate med email og user? Kanskje ikke
//typ: .populate('user', 'email');
export const createArticle = async (data) => Article.create(data);

export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();
}

export const updateArticle = async (id, data) =>
  Article.findOneAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });