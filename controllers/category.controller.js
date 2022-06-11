/**
 * This file  contains the controller logic for the category
 * resource.
 * Everytime a CRUD request come for the category, methods define
 * in this controller file will be executed.
 */


const { category } = require("../models");
const db = require("../models");
const Category = db. category;

/**
 * POST: Create and save a new category
 */
exports.create = (req, res) => {
    /**
     * Validation of request body
     */
    if(!req.body.name) {
        res.status(400) .send( {
            message: "Name of the category can't be empty"

        })
        return;
            }
        
            /**
             * Creation of the category object to be stored in the db.
             */

            const category = {
                name: req.body.name,
                description: req.body.description
            };
            Category.create(category)
            .then(category => {
                console.log(`category name: [$category.name] got inserted`)
                res.status(201).send(category);
            })
            .catch(err => {
                console.log(`Issue in inserted category name: [${category}]`) 
                console.log(`Error Message : ${err.message}`)
                res.status(500).send({
                    message: "Some internal error while storing the category"
                     })
            })
        }

/**
 * Get a list of all the categories
 */

exports.findAll = (req, res) => {

    let categoryName = rq.query.name;
    let promise;
    if(categoryName) {
        promise = ategory.findAll({
            where: {
                name: categoryName
            }
        });
    }else{
        promise = Category.findAll();
    }

    promise
    .then(categories => {
     res.status(200).send(categories);
})
.catch(err =>  {
    res.status(500).send({
        message:"Some internal error while fetching the categories"
})
})
}

/**
 * Get a category based on the category id
 */

exports.findOne = (req, res) => {
    const categoryId = req.params.id; //1

    category.findByPK(categoryId)
    .then(category => {
        res.status(200).send(category);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the category"
        })
    })
}

/**
 * Upadte the existing  category
 */
exports.update = (req, res) => {

    const category = {
    name: req.body.name,
    description: req.body.description
    };
    const categoryId = req.params.id

    category.update(category, {
      wher: {id: categoryId}
    })
        .then(updatedcategory => {
        //where the updation happened successfuly.
        //you need to send  the updayted row to the table.
        //But while fetching that row and sending it to user.
        //there can be a error.
        category.findByPK(categoryId)
        .then(category => {
            res.status(200).send(category);
        })
        .catch(err => { 
            res.status(500).send({
                message: "Some internal error while fetching the category"

            })
         })
        })
        .catch(err => {
            //where the updation task failed.
            res.status(500).send({
                message:"Some internal error while updating the category"
            })
        })
    }    


            
