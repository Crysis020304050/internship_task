'use strict';
const {USER_CHARACTERISTIC: {GENDER: {OTHER, FEMALE, MALE}, ROLE: {CUSTOMER, ADMIN}}} = require('../../constants');

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {
            User.hasMany(models.RefreshToken, {foreignKey: 'user_id'});
        }
    }

    User.init({
        firstName: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(32),
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