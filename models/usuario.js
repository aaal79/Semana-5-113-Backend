'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
       
        static associate(models) {
            // define association here
        }
    };
    Usuario.init({
        rol: DataTypes.STRING,
        nombre: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        tipo_documento: DataTypes.STRING,
        num_documento: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        estado: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Usuario',
    });
    return Usuario;
};