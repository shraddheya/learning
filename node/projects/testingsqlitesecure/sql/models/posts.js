/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('posts', {
		post: {
			type: DataTypes.STRING,
			allowNull: false
		},
		boss: {
			type: DataTypes.BIGINT,
			allowNull: true,
			defaultValue : null
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
		tableName: 'posts',
	});
};
