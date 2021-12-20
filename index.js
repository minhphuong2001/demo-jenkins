const express = require("express");
const connectDB = require("./config/database");

connectDB();

const app = express();

const router = require("./routers");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to myapp");
})

app.get('/about', (req, res) => {
    res.send('this is about page.')
})

router(app);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on PORT 5000`));
