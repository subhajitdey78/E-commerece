/**
 * This file will contain the routes logic for the product resource
 */
const productController = require("../controllers/product.controller")

module.exports = function(app) {

    
    app.post("/ecomm/api/v1/products", [requestValidator.validateProductRequest, authJwt.verifyToken, authJwt.isAdmin] ,productController.create);

    app.get("/ecomm/api/v1/products", productController.findAll);

    app.get("/ecomm/api/v1/products/:id", productController.findOne);

    app.put("/ecomm/api/v1/products/:id",[requestValidator.validateProductRequest, authJwt.verifyToken,  authJwt.isAdmin ] ,productController.update);
    
    app.put("/ecomm/api/v1/products/:id",[requestValidator.validateProductRequest, authJwt.verifyToken,  authJwt.isAdmin ] ,productController.update);

    app.get("/ecomm/api/v1/categories/:categoryId/products", productController.getProductsUnderCategory);
}