const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./Routes/userRoute");

// const route = require("./Routes/userRoute.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MongoURl;

mongoose.connect(URL)
    .then(() => {
        console.log("Db Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log("Error connecting to DB:", err));

    app.use("/api", route);