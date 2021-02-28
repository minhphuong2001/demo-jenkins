const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");

module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", categoryRouter);
};
