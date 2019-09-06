/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('notifications', {
      when: {
        type: DataTypes.DATE,
        allowNull: false
      },
      why: {
        type: DataTypes.STRING,
        allowNull: false
      },
      what: {
        type: DataTypes.STRING,
        allowNull: false
      },
      whom: {
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
        tableName: 'notifications',
      });
  };
  