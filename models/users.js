module.exports = (sequelize, DataTypes) => {
  // define a model and its fields
  const User = sequelize.define(
    "user",
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
      //  different table name than model name
      // tableName: "USERS_LIST",
      //  if we don't want createdAt and updatedAt
      //  timestamps: false,
      //  for single createdAt: false, updatedAt: false,
      // createdAt: false,
    }
  );
  return User;
};
