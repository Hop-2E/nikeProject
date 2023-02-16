import Product from '../model/Product.js';

export const getAllProduct = async (req, res) => {
  try {
    // const limit = req.query.limit;
    // const skip = req.query.skip;
    // const link = await Link.find({}).limit(limit).skip(skip);
    res.status(200).send({
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findProduct = async (req, res) => {
  try {
    const { title } = req.params;
    const product = await Product.findOne({
      name: { title },
    });
    res.status(200).send({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const superDelete = async (req, res) => {
  try {
    const { _id } = req.params;
    const url = await Product.findByIdAndRemove(_id);
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
