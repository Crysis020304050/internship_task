'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RefreshToken extends Model {
        associate(models) {
            RefreshToken.belongsTo(models.User, {foreignKey: 'userId'});
        }
    }

    RefreshToken.init({
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        value: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
            primaryKey: true,
        }
    }, {
        sequelize,
        modelName: 'RefreshToken',
        timestamps: false,
    });
    return RefreshToken;
};