import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';


const App: React.FC = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
};

export default App;

// import  ReactDOM  from "react-dom/client";
// import {BrowserRouter } from 'react-router-dom'

// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )