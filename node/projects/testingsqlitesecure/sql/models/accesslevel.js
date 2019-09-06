'use strict';
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('accesslevel', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
    createdAt: {
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      // defaultValue: sequelize.literal('CURRENT_TIMESTAMP' + sequelize.dialect.sequelize.options.dialect === 'mysql' ? ' ON UPDATE CURRENT_TIMESTAMP' : ''),
      defaultValue: sequelize.literal(`CURRENT_TIMESTAMP ${sequelize.dialect.sequelize.options.dialect === 'mysql' ? ' ON UPDATE CURRENT_TIMESTAMP' : ''}`),
      // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      type: DataTypes.DATE
    }
  }, {
      tableName: 'accesslevel'
    });
};