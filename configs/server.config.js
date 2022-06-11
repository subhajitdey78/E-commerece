if(proocess.env.NODE_ENV != 'production') {
    require('ditenv').config();
    }
    module.exports = {
        PORT: process.env.PORT
    }