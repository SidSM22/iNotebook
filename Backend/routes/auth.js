const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Harryisagoodb$oy';
//Create a user using : POST "/api/auth/createuser".No Login required
router.post(
  "/createuser",
  [
    body("name", "Enter a Valid Name").isLength({ min: 3 }),
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password must be atleast 5 Characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if there are errors return the errors, and the bad request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry the user with this email already exists." });
      }


      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt)

      //Create New User
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user:{
            id: user.id
        }
      }

      const authToken = jwt.sign(data,JWT_SECRET);
      console.log(authToken);
      res.json({authToken});

      //catching errors
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");

    }
  }
);

module.exports = router;
