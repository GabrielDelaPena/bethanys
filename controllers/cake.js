const Cake = require("../models/Cake");

exports.getCakes = async (req, res) => {
  try {
    const cakes = await Cake.find();
    if (cakes.length <= 0) {
      return res.status(400).send("No cakes found!");
    }

    console.log("CAKES FETCHED");
    res.status(200).json(cakes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("An error occured in the server, we are currently fixing it.");
  }
};

exports.addCake = async (req, res) => {
  const cake = new Cake({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category: req.body.category,
  });

  try {
    await cake.save();
    console.log("CAKE CREATED");
    res.status(200).json({ cake });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("An error occured in the server, we are currently fixing it.");
  }
};
