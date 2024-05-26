const DataSchema = require("../schema/schema");

const getApi = async (req, res) => {
  try {
    let data = await DataSchema.find();
    return res
      .status(200)
      .json({ error: false, message: "Data fetched successfully", data: data });
  } catch (e) {
    return res.status(500).json({ error: true, message: e });
  }
};

const postApi = async( req, res)=>{
  try {
    const newData = new DataSchema(req.body);
    const savedData = await newData.save();
   return  res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


module.exports = { getApi,postApi };
