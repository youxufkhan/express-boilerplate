const { PrismaClient } = require('@prisma/client'); // Import PrismaClient
const config = require('config');
const dbUrl = config.get('DATABASE_URL');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: dbUrl,
        },
    },
});

process.on('SIGTERM', () => {
    prisma.$disconnect();
});