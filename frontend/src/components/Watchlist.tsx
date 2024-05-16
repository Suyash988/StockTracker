import React from 'react';
import { Button } from '@mui/material';

interface WatchlistProps {
  stocks: string[];
  onAddStock: (stock: string) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({ stocks, onAddStock }) => {
  const [newStock, setNewStock] = React.useState('');

  const handleAddStock = () => {
    onAddStock(newStock);
    setNewStock('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
    <ul className="list-disc list-inside mb-4 space-y-2">
      {stocks.map((stock, index) => (
        <li key={index} className="text-gray-700">{stock}</li>
      ))}
    </ul>
    <div className="flex gap-2">
      <input
        type="text"
        value={newStock}
        onChange={(e) => setNewStock(e.target.value)}
        placeholder="Add stock symbol"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      <Button onClick={handleAddStock} variant='contained' className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
        Add to Watchlist
      </Button>
    </div>
  </div>
  );
};

export default Watchlist;