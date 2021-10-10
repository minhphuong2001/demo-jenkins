const Category = require("../models/Category");
const asyncHandle = require('../middlewares/asyncHandle')

module.exports = {

  getAllCategory: asyncHandle(async(req,res,next) => {
    const categories = await Category.find();
      res.json({
        err: 0,
        success: true,
        data: categories,
      });
  }),

  getCategory: asyncHandle(async(req,res) => {
    const category = await Category.findById(req.params.id);
    res.json({
          err: 0,
          success: true,
          data: category,
        });
  }),

  createCategory: asyncHandle(async(req,res) => {
    const { name, description } = req.body;
      const category = await Category.create({ name, description });

      res.json({
        err: 0,
        success: true,
        data: category,
      });
  }),

  deleteCategory: asyncHandle(async(req,res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    if(!category) {
      return res.json({
        err: 1,
        success: false,
        data: `Cannot find Book with ID ${req.params.id}`
      })
    }
    res.json({
      err: 0,
      success:true,
      data: {}
    })
  })

  // getAllCategory: async (req, res) => {
  //   try {
  //     const categories = await Category.find();

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: categories,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // getCategory: async (req, res) => {
  //   try {
  //     const category = await Category.findById(req.params.id);

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: category,
  //     });
  //   } catch (err) {
  //     res.json({
  //       err: 1,
  //       success: false,
  //       data: err.message,
  //     });
  //   }
  // },

  // createCategory: async (req, res) => {
  //   try {
  //     const { name, description } = req.body;
  //     const category = await Category.create({ name, description });

  //     res.json({
  //       err: 0,
  //       success: true,
  //       data: category,
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
