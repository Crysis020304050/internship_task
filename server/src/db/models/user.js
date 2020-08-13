'use strict';
const {USER_CHARACTERISTIC: {GENDER: {OTHER, FEMALE, MALE}, ROLE: {CUSTOMER, ADMIN}}} = require('../../constants');

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {
            User.hasMany(models.RefreshToken, {foreignKey: 'userId'});
        }
    }

    User.init({
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        login: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                isBefore: new Date().toLocaleDateString(),
            }
        },
        creditCard: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM(OTHER, MALE, FEMALE),
            allowNull: false,
            defaultValue: OTHER,
        },
        role: {
            type: DataTypes.ENUM(CUSTOMER, ADMIN),
            allowNull: false,
            defaultValue: CUSTOMER,
        }
    }, {
        sequelize,
        modelName: 'User',
        timestamps: true,
    });
    return User;
};