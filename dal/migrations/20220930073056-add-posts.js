'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('posts', {
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
        }
      },
      title: {
        type: DataTypes.STRING,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('posts');
  }
};
