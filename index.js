const express = require("express");
const connectDB = require("./config/database");

connectDB();

const app = express();

const router = require("./routers");

app.use(express.json());

router(app);

app.listen(5000, console.log(`Server running on PORT 5000`));
