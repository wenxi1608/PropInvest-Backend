const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const validation = require("./validation_controller");

module.exports = {
  register: async (req, res) => {
    // 1. Validations
    const formData = validation.register.validate(req.body);

    if (formData.error) {
      return res.status(409).json({ error: formData.error.message });
    }

    const validatedValues = formData.value;

    // 2. Check if user exists
    const userExists = await db.user.findOne({
      where: { email: validatedValues.email },
    });
    if (userExists !== null) {
      return res.status(409).json({ error: "Email is taken" });
    }

    // 3. Hash password
    const hashedPwd = await bcrypt.hash(validatedValues.password, 10);

    // 4. Create user in db and JWT
    try {
      await db.user.create({
        firstName: validatedValues.firstName,
        lastName: validatedValues.lastName,
        email: validatedValues.email.toLowerCase(),
        password: hashedPwd,
      });

      const userData = {
        firstName: validatedValues.firstName,
        lastName: validatedValues.lastName,
        email: validatedValues.email.toLowerCase(),
      };
      const token = jwt.sign(
        {
          expiresIn: "2h",
          data: userData,
        },
        process.env.JWT_SECRET
      );
      return res.json({ token });
    } catch (err) {
      return res.status(500).json({ error: "Failed to create user" });
    }
  },

  login: async (req, res) => {
    // 1. Check if user email is in db and pwd matches
    try {
      const user = await db.user.findOne({
        where: { email: req.body.email },
      });

      const userData = {
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
        email: user.dataValues.email.toLowerCase(),
      };

      if (
        user.dataValues &&
        (await bcrypt.compare(req.body.password, user.dataValues.password))
      ) {
        // 2. Create token
        const token = jwt.sign(
          {
            expiresIn: "2h",
            data: userData,
          },
          process.env.JWT_SECRET
        );
        return res.json({ token });
      }
    } catch (err) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
  },

  auth: async (req, res, next) => {
    try {
      res.json(true);
    } catch (error) {
      return res.status(400).json({ error: "Not authorised" });
    }
  },
};
