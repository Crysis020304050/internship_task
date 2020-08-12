'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RefreshToken extends Model {
        associate(models) {
            RefreshToken.belongsTo(models.User, {foreignKey: 'user_id'});
        }
    }

    RefreshToken.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'RefreshToken',
        timestamps: false,
    });
    return RefreshToken;
};