/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('attendance', {
		prid: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		mode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		device: {
			type: DataTypes.INTEGER(13),
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
		tableName: 'attendance',
	});
};
