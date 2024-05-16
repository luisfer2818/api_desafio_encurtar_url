const { Sequelize, Model } = require('sequelize');

class Url extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          field: 'ID_URL',
        },
        url_curta: {
          type: Sequelize.STRING(50),
          field: 'URL_CURTA',
          allowNull: false,
        },
        url_original: {
          type: Sequelize.STRING(255),
          field: 'URL_ORIGINAL',
          allowNull: false,
        },
        hash: {
          type: Sequelize.STRING(6),
          field: 'HASH',
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: 'CREATED_AT',
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: 'UPDATED_AT',
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'url_tb',
        freezeTableName: true,
        timestamps: true,
      },
    );

    return this;
  }
}

module.exports = Url;
