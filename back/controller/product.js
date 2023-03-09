import { Product } from '../model/Product.js';
import { Order } from '../model/Product.js';
import User from '../model/User.js';

export const getAllProduct = async (req, res) => {
  console.log("approve product")
  try {
    const limit = req.query.limit;
    const skip = req.query.skip;
    const product = await Product.find({}).limit(limit).skip(skip);
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


export const getAllOrder= async (req, res) => {
  console.log("approve product")
  try {
    const order = await Order.find({})
    res.status(200).send({
      data: order,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }}

export const createProduct = async (req, res) => {
  console.log("create product")
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

// export const findProduct = async (req, res) => {
//   try {
//     const { params } = req.params;
//     const product = await Product.findOne({
//       ShortUrl: params,
//     });
//     res.status(200).send({
//       success: true,
//       data: product,
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       data: error.message,
//     });
//   }
// };

// export const superDelete = async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const url = await Product.findByIdAndRemove(_id);
//     res.status(200).send({
//       success: true,
//       data: url,
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       data: error.message,
//     });
//   }
// };
export const getUsersProduct = async (req, res) => {
  console.log("get users product")
  try {
    const { id } = req.params.id;
    const user = await User.findById(id).populate('Order');
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};



export const approveProduct = async (req, res) => {
  console.log("approve product")
  try {
    const { id } = req.body;
    const product = await Order.findById(id).populate("Product");
    await Order.findByIdAndRemove(id);
    res.status(200).send({
      data: product,
      message: 'Approved',
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getProductByCategory = async (req, res) => {
  console.log("123")
  try {
    const { category } = req.body;
    const products = await Product.find({
      category: category,
    });
    res.status(200).send({
      data: products,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  console.log("123wqqw")
  try {
    const {id } = req.params;
    const product = await Product.findById({_id : id});
    res.status(200).send({
      data: product,
      success: true,
    })
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    })
  }
}