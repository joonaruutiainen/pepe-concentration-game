import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage, ConcentrationGame, Games } from './routes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='games' element={<Games />} />
          <Route path='games/:mode' element={<ConcentrationGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
