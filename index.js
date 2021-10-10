const express = require("express");
const connectDB = require("./config/database");

connectDB();

const app = express();

const router = require("./routers");

app.use(express.json());

router(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT 5000`));
