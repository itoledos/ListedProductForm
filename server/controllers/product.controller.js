const {Producto} = require("../models/product.model")



module.exports.createProduct = (req,res) => {
  const { title, price, description} = req.body;
  Producto.create({
    title: title,
    price: price,
    description: description
  })
  .then(producto=>res.json(producto))
  .catch(err=>res.json(err))
}

module.exports.getAllProducts = (req,res) => {
  const { title, price, description} = req.body;
  Producto.find()
  .then(productos=>res.json({'products': productos}))
  .catch(err=>res.json(err))
}

module.exports.getProduct = (req,res) => {
  Producto.findOne({_id:req.params.id})
  .then(product=>res.json({'producto': product}))
  .catch(err=>res.json(err))
}

module.exports.updateProduct = (req,res) => {
  Producto.findOneAndUpdate({_id:req.params.id},
    req.body, {new: true})
  .then(upd=>res.json(upd))
  .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req,res) => {
  Producto.deleteOne({_id:req.params.id})
  .then(delConfirm=>res.json(delConfirm))
  .catch(err=>res.json(err))
}