const ProductController = require('../controllers/product.controller');

module.exports = app => {

    app.get("/api/products/all", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProduct);
    app.post("/api/products/new", ProductController.createProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
  };