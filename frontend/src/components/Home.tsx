import React, { useEffect, useState } from 'react';
import StockInfo from './StockInfo';
import Watchlist from './Watchlist';
import axios from 'axios';

const Home: React.FC = () => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get(`/watchlist/${userId}`);
        setWatchlist(response.data.map((item: { stock: string }) => item.stock));
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    if (userId) {
      fetchWatchlist();
    }
  }, [userId]);

  const handleAddStock = async (stock: string) => {
    try {
      await axios.post('/watchlist', { stock, userId });
      setWatchlist([...watchlist, stock]);
    } catch (error) {
      console.error('Error adding stock to watchlist:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <StockInfo />
      </div>
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <Watchlist stocks={watchlist} onAddStock={handleAddStock} />
      </div>
    </div>
  );
};

export default Home;