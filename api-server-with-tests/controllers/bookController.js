const Book = require('../models/bookModel');

exports.createBook = async (bookData) => {
  return await Book.create(bookData);
};

exports.getAllBooks = async () => {
  return await Book.find();
};
