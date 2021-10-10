const express = require("express");

const router = express.Router({ mergeParams: true });

const categoryController = require("../controllers/categoryController");

const bookRouter = require("./bookRouter");
const adminMiddleware = require("../middlewares/adminMiddleware")
router.use("/:id/books", bookRouter);

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory)

router
  .route("/:id")
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
