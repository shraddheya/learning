
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('FakeData', {
      prid: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      contactno: {
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
        tableName: 'FakeData',
      });
  };
  