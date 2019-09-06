/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    prid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    change_password : {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    change_password_link : {
      type: DataTypes.STRING,
      allowNull: false
    },
    post: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contactno: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    address_c_houseno: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_c_area: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_c_city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_c_state: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_c_country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_c_pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    address_p_houseno: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_p_area: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_p_city: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_p_state: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_p_country: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    address_p_pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    access_levels: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    services: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    permissions: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    document_acesslevels: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    leaves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    current_salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null

    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
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
      tableName: 'users',
    });
};
