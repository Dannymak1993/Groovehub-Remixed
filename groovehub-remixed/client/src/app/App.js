import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <AppRoutes />
    </div>
  );
}

export default App;
