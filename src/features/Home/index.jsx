import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/MainBanner';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import TopMenu from '../../components/TopMenu';
import Images from '../../constants/Image';
import ProductList from '../Products/ProductList';
import {firestore} from '../../app/firebase'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

Home.propTypes = {

};

function Home(props) {

  const user = localStorage.getItem('user');

  const [data, setData] = useState([]);

  const getProducts = async () => {
    firestore.collection('products').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
      });
      setData(docs);
      });
  };

  useEffect(() => {
      getProducts();
  },[]);

  return (
    <div className="Home">
      <TopMenu />
      <h1>{user && user}</h1>
      <Banner
        title="CORSAIR"
        description="Provide gaming headsets, gaming PC cases,
            RGB fans, CPU liquid cooling, gaming keyboards,
            gaming mice, gaming PCs, gaming power supplies,
            DDR4 memory, and ..."
      />

      <Title title="Products" />
      <ProductList data={data}/>
      <Banner
        backgroundUrl={Images.BG_BANNER_1}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      
      <Title title="Products 2" />
      <ProductList data={data}/>

      <Banner
        backgroundUrl={Images.BG_BANNER_2}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      <Title title="Products 3" />
      <ProductList data={data}/>
      <Footer />
    </div>


  );
}

export default Home;