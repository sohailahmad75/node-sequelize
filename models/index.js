const { Sequelize, DataTypes } = require("sequelize");
const { logger } = require("sequelize/lib/utils/logger");

// create sequelize connection
const sequelize = new Sequelize("sequelize-node", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.log(`Error: ${err}`));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, DataTypes);

//.sync({ force: true }) > remove the all fields from the previous table and add new one
db.sequelize
  .sync({ force: true })
  .then(() => console.log("DB re-sync"))
  .catch((err) => console.log(`Error while sync db ${err}`));
