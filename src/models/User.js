const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
 
const User = sequelize.define('user', {
   
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false       
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false    
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: false    
    },
    birthdy:{
        type: DataTypes.DATEONLY,
        allowNull: false    
    }
});

module.exports = User;