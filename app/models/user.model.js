const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, {data:{ id: res.insertId, ...newUser }});
  });
};

User.getAll = (result) => {
  let query = "SELECT * FROM users";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

module.exports = User;
