

module.exports = (sequelize, Sequelize) => {
     const Cart = sequelize.define("cart",  {
        id: {
            typr: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cost: {
            type: Sequelize.INTEGER
        }
     });
     
     return Cart;
}