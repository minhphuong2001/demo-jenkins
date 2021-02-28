const express = require("express");

const router = express.Router();

const categoryController = require("../controllers/categoryController");

const bookRouter = require("./bookRouter");

router.use("/:id/books", bookRouter);

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router.route("/:id").get(categoryController.getCategory);

module.exports = router;
