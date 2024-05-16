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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1 }}>
        <StockInfo />
      </div>
      <div style={{ width: '30%' }}>
        <Watchlist stocks={watchlist} onAddStock={handleAddStock} />
      </div>
    </div>
  );
};

export default Home;