const { Book } = require('../models');
 
module.exports = {
  // Create a new book
  createBook: async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
 
  // Get all books
  getBooks: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
 
  // Update book
  updateBook: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (book) {
        await book.update(req.body);
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
 
  // Delete book
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByPk(req.params.id);
      if (book) {
        await book.destroy();
        res.status(200).json({ message: 'Book deleted successfully' });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
 