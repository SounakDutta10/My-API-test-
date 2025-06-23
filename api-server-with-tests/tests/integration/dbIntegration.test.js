const mongoose = require('mongoose');
const Book = require('../../models/bookModel');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

test('Integration - Save and fetch book', async () => {
  const book = new Book({ title: 'Integration Book', author: 'Author' });
  await book.save();
  const fetched = await Book.findOne({ title: 'Integration Book' });
  expect(fetched.author).toBe('Author');
});
