const express = require("express");
const app = express();
const dotenv = require("dotenv"); dotenv.config();
const cors = require('cors');
const port = process.env.PORT || 5001;
const bodyParser = require('body-parser');
const connectDb= require("./config/db");
const router = require("./routes/routes");

connectDb();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);
app.listen(port, () => {
    console.log(`server running on port : ${port }`);
});
