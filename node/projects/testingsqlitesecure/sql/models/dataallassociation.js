/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('dataallAssociation', {
		device: {
			type: DataTypes.INTEGER(13),
			allowNull: false
		},
		tagid: {
			type: DataTypes.STRING(12),
			allowNull: false
		},
		tagdata: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal(`CURRENT_TIMESTAMP ${sequelize.dialect.sequelize.options.dialect === 'mysql' ? ' ON UPDATE CURRENT_TIMESTAMP' : ''}`),
			allowNull: false
		}
	}, {
			tableName: 'dataallAssociation',
		});
};