import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="">
      <Navbar />
        <Routes>
        <Route  path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Products/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;