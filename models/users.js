module.exports = (sequelize, DataTypes) => {
  // define a model and its fields
  const User = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmail.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      //  if we don't want createdAt and updatedAt
      //  timestamps: false,
      //  for single createdAt: false, updatedAt: false,
      createdAt: false,
    }
  );
};
