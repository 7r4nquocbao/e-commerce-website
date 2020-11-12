import ProductList from './features/Products/ProductList';
import React from 'react';
import './App.scss';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import Banner from './components/Banner';
import Title from './components/Title';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <TopMenu/>
      <Banner/>
      <Title title="Products"/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
