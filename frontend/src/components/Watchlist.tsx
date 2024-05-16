import React from 'react';

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
    <div>
      <h2>Watchlist</h2>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>{stock}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newStock}
        onChange={(e) => setNewStock(e.target.value)}
        placeholder="Add stock symbol"
      />
      <button onClick={handleAddStock}>Add to Watchlist</button>
    </div>
  );
};

export default Watchlist;