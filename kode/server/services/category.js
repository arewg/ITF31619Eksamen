/**Services er satt opp basert på Marius Wallins' 
 * forelesninger gjennom semestert, men blitt modifisert for prosjektet.
 */

import Category from '../models/category.js';

export const getCategories = async () => Category.find();

export const createCategory = async (data) =>  Category.create(data);