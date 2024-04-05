// File testing done.

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

// Controller imports

// Middleware imports

// Model imports
import Requester from "../../db/models/requester/requester.js";

// Login tested. setter error removed.
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const old = await Requester.findOne({
      where: { email },
      raw: true,
    });
    if (!old) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    if (!bcrypt.compareSync(password, old.password)) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      const token = jwt.sign(
        { email: old.email, id: old.id, role: "user" },
        process.env.JWT_SECRET
      );
      delete old.password;
      return res.status(200).json({ token, requester: old });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Registeration tested. password validation error removed.
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const old = await Requester.findOne({
      where: { email },
    });
    if (old) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await Requester.create({
      email,
      password,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser.id, role: "requester" },
      process.env.JWT_SECRET
    );
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
