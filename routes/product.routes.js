/**
 * This file will contain the routes logic for the product resource
 */
const productController = require("../controllers/product.controller")

module.exports = function(app) {

    
    app.post("/ecomm/api/v1/products", productController.create);

    app.get("/ecomm/api/v1/products", productController.create);

    app.put("/ecom/api/v1/products/:id", productController.upadte);
    }