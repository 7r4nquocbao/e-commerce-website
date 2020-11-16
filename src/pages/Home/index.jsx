import React from 'react';

import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Banner from '../../components/Banner/MainBanner';
import SubBanner from '../../components/Banner/SubBanner';
import Title from '../../components/Title';
import ProductList from '../../features/Products/ProductList';
import Footer from '../../components/Footer';
import Images from '../../constants/Image';
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
      <Banner
        backgroundUrl={Images.BG_BANNER_1}
        title="CORSAIR"
        description="Provide gaming headsets, gaming PC cases,
      RGB fans, CPU liquid cooling, gaming keyboards,
      gaming mice, gaming PCs, gaming power supplies,
      DDR4 memory, and ..."
      />
      <ProductList />
      <Title title="Products 3" />
      <ProductList />
      <Footer />
    </div>


  );
}

export default Home;