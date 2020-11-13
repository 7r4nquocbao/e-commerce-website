import ProductList from './features/Products/ProductList';
import React from 'react';

import './App.scss';

import Header from './components/Header';
import TopMenu from './components/TopMenu';
import Title from './components/Title';
import Footer from './components/Footer';
import SubBanner from './components/Banner/SubBanner';
import Banner from './components/Banner/MainBanner';


function App() {
  return (
    <div className="App">
      <Header/>
      <TopMenu/>
      <Banner/>
      <SubBanner/>
      <Title title="Products"/>
      <ProductList/>
      <Title title="Products 2"/>
      <ProductList/>
      <Title title="Products 3"/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
