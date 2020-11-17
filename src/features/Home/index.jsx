import React from 'react';
import Banner from '../../components/Banner/MainBanner';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import TopMenu from '../../components/TopMenu';
import Images from '../../constants/Image';
import ProductList from '../Products/ProductList';

Home.propTypes = {

};

function Home(props) {
  return (
    <div className="Home">
      <TopMenu />
      <Banner
        title="CORSAIR"
        description="Provide gaming headsets, gaming PC cases,
            RGB fans, CPU liquid cooling, gaming keyboards,
            gaming mice, gaming PCs, gaming power supplies,
            DDR4 memory, and ..."
      />

      <Title title="Products" />
      <ProductList />
      <Banner
        backgroundUrl={Images.BG_BANNER_1}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      <Title title="Products 2" />
      <ProductList />

      <Banner
        backgroundUrl={Images.BG_BANNER_2}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      <Title title="Products 3" />
      <ProductList />
      <Footer />
    </div>


  );
}

export default Home;