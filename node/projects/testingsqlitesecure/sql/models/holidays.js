/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('holidays', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		date: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		locations: {
			type: DataTypes.STRING,
			allowNull: false
		},
		states: {
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
		tableName: 'holidays',
		timestamps: false
	});
};
