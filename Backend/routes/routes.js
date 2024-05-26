const express = require('express');
const {getApi}=require("../controller/controller");
const router = express.Router();
router.get("/",getApi);
module.exports = router;
