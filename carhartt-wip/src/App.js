import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './pages/Home';
import ProductDetailContainer from './components/ItemContainer';
import Cart from './pages/Cart';
import ContextProvider from './context/Context';

export default function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container mt-4 mb-4">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/category/:categoryName' element={<Homepage />} />
          <Route path='/item/:id' element={<ProductDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
    </>
  );
}
