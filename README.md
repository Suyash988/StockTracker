Stock Tracker Project
This project is a stock tracking application built with React for the frontend, Node.js for the backend, and PostgreSQL as the database using Prisma. Material-UI is used for components, and Tailwind CSS is used for styling.

Features
View real-time stock data from Alpha Vantage API.
Track stocks by adding them to the watchlist.
Authentication system using JWT tokens.
User-friendly interface with Material-UI components.
Responsive design with Tailwind CSS for styling.
Technologies Used
Frontend:

React
Material-UI
Tailwind CSS
Backend:

Node.js
Express.js
Prisma ORM
PostgreSQL
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/Suyash988/StockTracker.git
Navigate to the project directory:

bash
Copy code
cd stocktracker-project
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables:

Create a .env file in the backend directory and add necessary environment variables for database connection, API keys, etc.
Run the development server:

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
Access the application:

Open your browser and navigate to http://localhost:5173 to access the frontend.
Database Schema
The database schema is managed using Prisma ORM with PostgreSQL. The schema includes tables for users, watchlists, and any other necessary entities.

Deployment
This project can be deployed to various platforms such as Vercel for the frontend and Heroku for the backend. Make sure to set up environment variables accordingly for production deployment.

Contributors
Suyash Agnihotri
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Alpha Vantage API
Prisma
Material-UI
Tailwind CSS
