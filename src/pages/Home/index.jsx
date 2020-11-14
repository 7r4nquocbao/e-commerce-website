import React from 'react';

import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Banner from '../../components/Banner/MainBanner';
import SubBanner from '../../components/Banner/SubBanner';
import Title from '../../components/Title';
import ProductList from '../../features/Products/ProductList';
import Footer from '../../components/Footer';
Home.propTypes = {

};

function Home(props) {
  return (
    <div className="Home">
      <Banner />
      {/* <SubBanner /> */}
      <Title title="Products" />
      <ProductList />
      <Title title="Products 2" />
      <ProductList />
      <Title title="Products 3" />
      <ProductList />
      <Footer />
    </div>


  );
}

export default Home;