/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('experience', {
		prid: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		post: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		technical: {
			type: DataTypes.STRING,
			allowNull: false
		},
		package: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		additional_documents: {
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
		tableName: 'experience',
	});
};
