/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('transactions', {
		utid: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		},
		receiver: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		sender: {
			type: DataTypes.BIGINT,
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
		tableName: 'transactions',
	});
};

