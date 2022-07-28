module.exports = (sequelize, DataTypes) => {
  // define a model and its fields
  const User = sequelize.define("users", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      defaultValue: "test@gmail.com",
    },
    gender: {
      type: DataTypes.STRING,
    },
  });
};
