'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define(
    'User',
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.BIGINT,
        },
        updatedAt: {
            type: DataTypes.BIGINT,
        },
    },
    {
        tableName: 'user',
        timestamps: false,
    },
);
