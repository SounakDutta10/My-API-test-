const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.post('/', async (req, res) => {
  const book = await controller.createBook(req.body);
  res.status(201).json(book);
});

router.get('/', async (req, res) => {
  const books = await controller.getAllBooks();
  res.json(books);
});

module.exports = router;
