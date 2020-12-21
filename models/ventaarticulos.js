'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class VentaArticulos extends Model {
        
        static associate(models) {
            // define association here
        }
    };
    VentaArticulos.init({
        ventaId: DataTypes.INTEGER,
        articuloId: DataTypes.INTEGER,
        articulo: DataTypes.STRING,
        cantidad: DataTypes.INTEGER,
        precio: DataTypes.INTEGER,
        descuento: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'VentaArticulos',
    });
    return VentaArticulos;
};