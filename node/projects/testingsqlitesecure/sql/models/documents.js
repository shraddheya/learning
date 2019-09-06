/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('documents', {
		document_no: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name : {
			type: DataTypes.STRING,
			allowNull: false
		},
		cprid: {
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
		tableName: 'documents',
	});
};
