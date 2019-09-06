/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('connections', {
		prid1: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		prid2: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		connection: {
			type: DataTypes.STRING,
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
		tableName: 'connections',
	});
};
