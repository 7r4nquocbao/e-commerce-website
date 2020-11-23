import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/MainBanner';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import TopMenu from '../../components/TopMenu';
import Images from '../../constants/Image';
<<<<<<< HEAD
import {firestore} from '../../app/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Product from '../Products';
import { Button, Container, Row } from 'reactstrap';
import {ProductModel} from './../../models/ProductModel'
import { unwrapResult } from '@reduxjs/toolkit';
import { getData } from '../../app/productSlice';
=======
import { firestore } from '../../app/firebase'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Product from '../Products';
import { Button, Container, Row } from 'reactstrap';
import { ProductModel } from './../../models/ProductModel'
>>>>>>> 8cbb6a50a089c430cc4091d4666fbaf131045410

Home.propTypes = {

};

function Home(props) {

  const [products, setProducts] = useState([]);

<<<<<<< HEAD
  // useEffect(() => {
  //   firestore.collection("products").get().then(function(querySnapshot) {
  //     const products = [];
  //     querySnapshot.forEach(function(doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         products.push({...doc.data(), id: doc.id});      
  //     });
  //     setProducts(products);
  //   });
  // }, []);

  const dispatch = useDispatch();
  useEffect(async () => {
      const actionResult = await dispatch(getData());
      setProducts(unwrapResult(actionResult));
=======
  useEffect(() => {
    firestore.collection("products").get().then(function (querySnapshot) {
      const products = [];
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        products.push({ ...doc.data(), id: doc.id });
      });
      setProducts(products);
    });
>>>>>>> 8cbb6a50a089c430cc4091d4666fbaf131045410
  }, []);

  const displayData = () => {
    return (
      <Container>
        <Row>
          {
            products.map((item, index) => {
              return (
                <Product product={item} key={index} />
              )
            })
          }
        </Row>
      </Container>


    )
  }

  //   const handleAddProduct = () => {
  //   let iProduct = ProductModel;
  //   iProduct.Name = 'Gigabyte GeForce GTX 1660';
  //   iProduct.InputCost = 2000;
  //   iProduct.Profit = 10;
  //   iProduct.Sale = 5;
  //   iProduct.Thumbnail = 'https://phucanhcdn.com/media/product/37014_1660sgam1.png';
  //   iProduct.Images = '';
  //   iProduct.Stock = 1000;
  //   iProduct.idCategory = '';
  //   iProduct.idBrand = '';
  //   iProduct.isEnabled = true;
  //   alert(JSON.stringify(iProduct));

  //   firestore.collection('products').add(iProduct)
  //   .then(function(docRef) {
  //       console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //       console.error("Error adding document: ", error);
  //   });
  // }

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

      {displayData()}

      {/* <Banner
        backgroundUrl={Images.BG_BANNER_1}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      
      <Title title="Products 2" />

      <Banner
        backgroundUrl={Images.BG_BANNER_2}
        title="Logitech"
        description="Logitech to find the perfect wireless 
        or wired computer mice to enhance your productivity 
        or unleash your creativity...."
      />
      <Title title="Products 3" /> */}
      <Footer />
    </div>


  );
}

export default Home;