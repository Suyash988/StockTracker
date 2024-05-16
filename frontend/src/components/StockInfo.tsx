import React, { useEffect, useState } from 'react';
import { getStockInfo } from '../services/stockService';

const StockInfo: React.FC = () => {
  const [stockData, setStockData] = useState<any>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await getStockInfo('IBM');
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    fetchStockData();
  }, []);

  if (!stockData) {
    return <div>Loading stock data...</div>;
  }

  // Process the stock data as needed
  const timeSeries = stockData['Time Series (5min)'];
  const latestTime = Object.keys(timeSeries)[0];
  const latestData = timeSeries[latestTime];

  return (
    <div>
      <h2>IBM Stock Information</h2>
      <p>Time: {latestTime}</p>
      <p>Open: {latestData['1. open']}</p>
      <p>High: {latestData['2. high']}</p>
      <p>Low: {latestData['3. low']}</p>
      <p>Close: {latestData['4. close']}</p>
      <p>Volume: {latestData['5. volume']}</p>
    </div>
  );
};

export default StockInfo;