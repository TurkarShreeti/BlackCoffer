const getApi = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ error: false, message: "Api is working fine" });
  } catch (e) {
    return res.status(500).json({ error: true, message: e });
  }
};

module.exports = {getApi};
