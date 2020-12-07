import Email from '../models/email.js';

export const create = async (data) => Email.create(data);

export const list = async () => Email.find();