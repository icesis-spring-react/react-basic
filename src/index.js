import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Students from "./pages/Students";
import Login from './pages/Login';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="students" element={<Students />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />
 );

