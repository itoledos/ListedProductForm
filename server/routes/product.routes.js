const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // app.get("/api/products/", ProductController.findAllUsers);
    // app.get("/api/products/:id", ProductController.findOneSingleUser);
    // app.put("/api/products/update/:id", ProductController.updateExistingUser);
    // app.post("/api/products/new", ProductController.createNewUser);
    // app.delete("/api/products/delete/:id", ProductController.deleteAnExistingUser);


    app.get("/api/products/all", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProduct);
    app.post("/api/products/new", ProductController.createProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);


  };