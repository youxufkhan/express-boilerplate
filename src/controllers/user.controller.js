const { User } = require('../models')

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}


module.exports = {
  createUser,
  getUsers,
  // Export other controller functions here...
};
