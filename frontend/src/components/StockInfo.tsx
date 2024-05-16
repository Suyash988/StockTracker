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
    return <div className="text-center text-gray-500">Loading stock data...</div>;
  }

  // Process the stock data as needed
  const timeSeries = stockData['Time Series (5min)'];
  const latestTime = Object.keys(timeSeries)[0];
  const latestData = timeSeries[latestTime];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">IBM Stock Information</h2>
    <div className="space-y-2">
      <p><span className="font-semibold">Time:</span> {latestTime}</p>
      <p><span className="font-semibold">Open:</span> {latestData['1. open']}</p>
      <p><span className="font-semibold">High:</span> {latestData['2. high']}</p>
      <p><span className="font-semibold">Low:</span> {latestData['3. low']}</p>
      <p><span className="font-semibold">Close:</span> {latestData['4. close']}</p>
      <p><span className="font-semibold">Volume:</span> {latestData['5. volume']}</p>
    </div>
  </div>
  );
};

export default StockInfo;