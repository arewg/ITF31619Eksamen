import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id).populate('category', 'category');

export const listArticles = async () => Article.find().populate('category', 'category');

export const listByCategory = async (categoryId) => Article.find({category: {$in : categoryId}}).populate('category', 'category');

// Leksjon 14
export const listArticlesPage = async (queryStr) => {
  console.log(JSON.stringify(queryStr));
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr)
    .filter()
    .sort()
    .limitFields()
    .searchByQuery();

  const articles = await filters.query
  const paginated = await filters.pagination().query.populate('category', 'category');

  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
    
}

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