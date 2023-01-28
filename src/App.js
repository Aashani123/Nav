import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/Salary.jsx';
import Analytics from './pages/Staff.jsx';
import Comment from './pages/Leave.jsx';
import Product from './pages/Chat.jsx';
import ProductList from './pages/Project.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/salary" element={<About />} />
          <Route path="/leave" element={<Comment />} />
          <Route path="/staff" element={<Analytics />} />
          <Route path="/chat" element={<Product />} />
          <Route path="/project" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;