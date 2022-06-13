/**
 * This file will be used to represent the prroduct Scheme
 * product Fielsd:
 * 1. Id
 * 2. name
 * 3. description
 * 4. cost
 */

module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
       description: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
           type: Sequelize.INTEGER,
           allowNUll: false
    }
},
{
    tableName: 'products'
})
return product;
}