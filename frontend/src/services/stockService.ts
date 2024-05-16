import axios from 'axios';

const API_KEY = '60A85AXZW6OA22SZ';
const BASE_URL = 'https://www.alphavantage.co/query';

export const getStockInfo = async (symbol: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol,
        interval: '5min',
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};