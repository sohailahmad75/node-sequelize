var db = require("../models");
const Users = db.users;

const addUser = async (req, res) => {
  try {
    // const user = await Users.build({ name: "test1", email: "test1@gmail.com" });
    // await user.save();
    const user = await Users.create({
      name: "test2",
      email: "test4@gmail.com",
    });
    // delete
    // user.destroy()

    // reload
    // data.name = 'new name'
    // data.reload() ignore new value and use the previous one

    // data.save() to save changed value
    console.log(user.dataValues);
    const response = {
      data: "ok",
    };
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = {
  addUser,
};
