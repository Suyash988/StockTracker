import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import cors  from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Add stock to watchlist
app.post('/watchlist', async (req, res) => {
  const { stock, userId } = req.body;
  try {
    const watchlistItem = await prisma.watchlist.create({
      data: {
        stock,
        userId,
      },
    });
    res.status(201).json(watchlistItem);
  } catch (error) {
    res.status(400).json({ error: 'Error adding to watchlist' });
  }
});

// Fetch user's watchlist
app.get('/watchlist/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const watchlist = await prisma.watchlist.findMany({
      where: { userId },
    });
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching watchlist' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});