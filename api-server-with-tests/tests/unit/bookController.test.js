const controller = require('../../controllers/bookController');
const Book = require('../../models/bookModel');
jest.mock('../../models/bookModel');

describe('Book Controller', () => {
  it('should create a book', async () => {
    const book = { title: 'Test', author: 'John' };
    Book.create.mockResolvedValue(book);
    const result = await controller.createBook(book);
    expect(result).toEqual(book);
  });
});
