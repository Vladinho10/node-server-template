'use strict';

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define(
        'Posts',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            userId: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            title: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: 'posts',
            timestamps: false,
        },
    );

    Posts.addHook('beforeSave', async model => {
        if (model.isNewRecord) {
            model.createdAt = new Date().getTime();
        }

        model.updatedAt = new Date().getTime();
    });

    Posts.associate = models => {
        Posts.belongsTo(models.User, {
            foreignKey: 'userId',
        });
    };

    return Posts;
};

