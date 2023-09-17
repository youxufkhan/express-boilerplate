const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log("✔ DATABASE CONNECTED")
    console.log('Database connection established.');
  } catch (error) {
    console.log("❌ DATABASE NOT CONNECTED")
    console.error('Error connecting to the database:', error.message);
    process.exit(1);
  }
}

async function disconnect() {
  await prisma.$disconnect();
  console.log('Database connection closed.');
}

process.on('SIGINT', async () => {
    try {
      await disconnect(); // Disconnect from the database
      console.log('Server shutting down. Database connection closed.');
    } catch (error) {
      console.error('Error while shutting down the server:', error);
    } finally {
      process.exit(0); // Exit the application
    }
  });

module.exports = {
  prisma,
  connect,
  disconnect,
};

