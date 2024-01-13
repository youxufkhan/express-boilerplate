const { User } = require("../models");

async function getUsers(req, res) {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.getById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createUser(req, res) {
  const user = req.body;
  try {
    const createdUser = await User.create(user);
    res.status(201).json(createdUser[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const user = await User.update(id, updatedUser);
    if (user.length > 0) {
      res.status(200).json(user[0]);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const deletedCount = await User.delete(id);
    if (deletedCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  // Export other controller functions here...
};
