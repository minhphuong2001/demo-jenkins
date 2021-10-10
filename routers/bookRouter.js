const express = require("express");

const router = express.Router({ mergeParams: true });

const bookController = require("../controllers/bookController");

router
  .route("/")
  .get(bookController.getAllBook)
  .post(bookController.createBook);

// router
//   .route("/category/:id")
//   .get(bookController.getBookByCategory),

router
  .route("/:id")
  .get(bookController.getBook)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook)
  .post(bookController.createBook);

module.exports = router;
