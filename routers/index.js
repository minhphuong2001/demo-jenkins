const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const authRouter = require("./authRouter");
const errorHandle = require('../middlewares/errorHandle');
const adminMiddleware = require('../middlewares/adminMiddleware');
const uploadRouter = require('./uploadRouter')
const authorRouter = require('./authorRouter')

module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category" ,categoryRouter);
  app.use("/api/auth", authRouter)
  app.use("/api/upload", uploadRouter)
  app.use("/api/author", authorRouter)
  //handle err response
  app.use(errorHandle)
};
