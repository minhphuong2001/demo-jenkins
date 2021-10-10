const Book = require("../models/Book");
const asyncHandle = require("../middlewares/asyncHandle")

module.exports = {

  getAllBook: asyncHandle(async(req,res) => {
    var page = req.query.page;
    const page_size = 2;
    page = parseInt(page)
    var skip = (page-1)* page_size
      
      
    // const books = await Book.find({categoryID: req.params.id});
    if(page) {
      const books = await Book.find().populate({
      path: 'categoryID',
      })
      .skip(skip)
      .limit(page_size)

        res.json({
          err: 0,
          success: true,
          data: books,
        });
    }
    else{
      const books = await Book.find().populate({
      path: 'categoryID',
      })

      console.log(books);
      
      res.json({
        err: 0,
        success: true,
        data: books,
      });
    }
  }),

  getBook: asyncHandle(async(req,res) => {
    const book = await Book.findById(req.params.id);
      
      res.json({
        err: 0,
        success: true,
        data: book,
      });
  }),

  createBook: asyncHandle(async(req,res) => {
    const { bookName, price, author, nxb, } = req.body;
    console.log(req.params);

      const book = await Book.create({
        bookName,
        price,
        author,
        nxb,
        categoryID: req.params.id,
      });
    
    console.log(book);

      res.json({
        err: 0,
        success: true,
        data: book,
      });
  }),

  updateBook: asyncHandle(async(req,res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      err: 0,
      success: true,
      data: book,
    });
  }),

  deleteBook: asyncHandle(async(req,res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

      if (!book) {
        return res.json({
          err: 1,
          success: false,
          data: `Cannot find Book with ID ${req.params.id}`,
        });
      }

      res.json({
        err: 0,
        success: true,
        data: {},
      });
  })

  // getAllBook: async (req, res) => {
  //   try {
  //     const books = await Book.find({categoryID: req.params.id});

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: books,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // getBookByCategory: async (req, res) => {
  //   try {
  //     const books = await Book.find({ categoryID: req.params.id });

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: books,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // getBook: async (req, res) => {
  //   try {
  //     const book = await Book.findById(req.params.id);
  //     console.log(book);
  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: book,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // createBook: async (req, res) => {
  //   try {
  //     const { bookName, price, author, nxb, } = req.body;

  //     const book = await Book.create({
  //       bookName,
  //       price,
  //       author,
  //       nxb,
  //       categoryID: req.params.id,
  //     });

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: book,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // updateBook: async (req, res) => {
  //   try {
  //     const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
  //       new: true,
  //     });

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: book,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // deleteBook: async (req, res) => {
  //   try {
  //     const book = await Book.findByIdAndDelete(req.params.id);

  //     if (!book) {
  //       return res.json({
  //         err: 1,
  //         success: false,
  //         data: `Cannot find Book with ID ${req.params.id}`,
  //       });
  //     }

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: {},
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },
};
