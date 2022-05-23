const express = require('express');
const router = express.Router();

const users = require("../controllers/user.controller.js");
  
// Create a new users
router.post("/users", users.create);
  
// Retrieve all users
router.get("/users", users.findAll);

module.exports = router;

