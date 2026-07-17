const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();


app.use(cors({
    origin: "https://portifolio-1-fr2q.onrender.com",


    methods: ["GET", "POST"],

    credentials: true

}));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {

    res.json({

        message: "Salem Portfolio Backend is running 🚀"

    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});