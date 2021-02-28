const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/bookstore", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`Connected to DB ${con.connection.host}`);
  } catch (err) {
    console.log(`Error when connect DB ${err.message}`);
  }
};

module.exports = connectDB;
