import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  // Create a new user with a UUID
  const user = await prisma.user.create({
    data: {
      id: uuidv4(),
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: 'securepassword123',
    },
  });
  console.log('Created user:', user);

  // Create a watchlist for the user with a UUID
  const watchlist = await prisma.watchlist.create({
    data: {
      id: uuidv4(),
      name: 'Tech Stocks',
      userId: user.id,
    },
  });
  console.log('Created watchlist:', watchlist);

  // Add a stock to the watchlist with a UUID
  const stock = await prisma.stock.create({
    data: {
      id: uuidv4(),
      symbol: 'AAPL',
      company: 'Apple Inc.',
      watchlistId: watchlist.id,
    },
  });
  console.log('Added stock to watchlist:', stock);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });