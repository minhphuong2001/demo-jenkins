const Category = require("../models/Category");

module.exports = {
  getAllCategory: async (req, res) => {
    try {
      const categories = await Category.find();

      res.json({
        err: 0,
        success: true,
        data: categories,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },

  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);

      res.json({
        err: 0,
        success: true,
        data: category,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name, description } = req.body;
      const category = await Category.create({ name, description });

      res.json({
        err: 0,
        success: true,
        data: category,
      });
    } catch (err) {
      res.json({
        err: 1,
        success: false,
        data: err.message,
      });
    }
  },
};
