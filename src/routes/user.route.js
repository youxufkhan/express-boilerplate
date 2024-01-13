const router = require("express").Router();

const { userController } = require("../controllers");

// Create a new user
router.post("/", userController.createUser);

// Get all users
router.get("/", userController.getUsers);

// Get user by id
router.get("/:id", userController.getUser);

// updateUser
router.put("/", userController.updateUser);

// Delete user
router.delete("/", userController.deleteUser);

module.exports = router;
