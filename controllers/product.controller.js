 /**
  * This file will contain the logic for thr product resource.
  * Everytime any CRUD request come for the category, methods defined in this contain
  * file will be executed.
  */


 const db = require("../models");
 const Product = db.product;

 /**
  * Create and save a new product
  */
exports.create = (req, res) => {

    /**
     * Validation of the request body
     */
    console
    if(!req.body.name) {
        res.status(400).send({
            messaage: "Name of the product can't be empty !"
        })
        return;
            }

         if (!req.body.cost) {
            res.status(400).send({
                message: "Cost of the product can't be empty !"
            })
            return;
         }  
const product = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    categoryId: req.body.categoryId
}
 
Product.create(product)
.then(product => {
    console.log(`product name: [${product.name}] got inserted in db`);
    res.status(200).send(product);
})
.catch(err => {
    console.log(`Issue in inserted product name: [${product.name}].Error`)
    res.status(500).send({
        message: " Some internal error while storing thre product"
    })
})
}
/**
 * Get a list of all the products
 */
 
exports.findAll = (req,res) => {

  
    
    let productName = req.query.name;
    let minCost = req.query.minCost; //null
    let maxCost = req.query.maxcost; //null
    let promise;

    if(productName) {
        promise = Product.findAll({
            where: {
                name: productName
            }
        })
    }else if(minCost && maxCost) {
        promise = Product.findAll({
            where: {
                cost: {
                    [Op.gte] : minCost,
                    [Op.lte] : maxCost

                }
            }
        })
               
    }else if(minCost) {
        promise = Product.findAll({
            where: {
                cost: {
                    [Op.gte] : minCost
                }
            }
            })
        }else if (maxCost) {
            promise = Product.findAll({
                where: {
                    cost: {
                        [Op.lte] : maxCost
                    }
                }
            })   
        
        }
        else{
        promise = Product.findAll()
        }
        promise
    .then(products => {
        res.status(200).send(products);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching all the products"
        })
    })
}


     /**
* Get a category based on the product id
*/
exports.findone = ( req, res) => {
    const productId = req.params.id;

    Product.findByPK(productId)
    .then(product => {
        if(!product) {
            return res.status(404).json({
                message: 'product not found'
                    })
        }
         res.status(200).send(product);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internsl error while fetching the product based on id"
        })
    })
    }

    exports.update = (req, res) => {

        
    const product = {
        name: req.body.name,
        description: req.body.description,
        codst: req.body.cost,
        categoryId: req.body.categoryId
    }
       const productId = req.params.id;
       
       product.update(product, {
        where:  { id: productId}
       })
       .then(updatedproduct => {
          product.findByPk(productId)
          .then(product => {
            res.status(200).send(product);
          })
          .catch(err => {
            res.status(500).send({
                message: "Updsation happened successfully, but some internal error "
            })
            })
          })
          .catch(err => {
            res.status(500).send({
                messaage: "Some internal error while updating details"
            })
            })
          }

       exports.delete = (req, res) => {
        const productId = req.params.id;

        Product.destroy({
            where: {id: productId}
        })
        .then(result => {
            res.status(200).send({
                message: "Successfully deleted the product"
            })
            })
            .catch(err => {
             res.status(500).send({
                message: " Some internal error while deleting the product"
             })
            })
         }

      /**Get the list of all the products under a category */      
 
      exports.getProductsUnderCategory = (req, res) => {
        const categoryId = parseInt(req.params.categoryId);
         
        //select * from product where categoryID = categoryId
      Product.findAll({
        where: {
            categoryId: categoryId
        }
      })
      .then(products => {
        res.status(200).send(products);
              })
              .catch(err => {
                res.status(500).send({
                    message: "Some internal error while fetching the product based on category"
                })
            })
        }
                          
     
            
                           