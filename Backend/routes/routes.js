const express = require('express');
const {getApi, postApi}=require("../controller/controller");
const router = express.Router();
router.get("/",getApi);
router.post('/', postApi);
module.exports = router;
