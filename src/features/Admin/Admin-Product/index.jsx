import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fb, firestore, getProducts } from '../../../app/firebase';
import { adminRoleId } from '../../../models/Role';
import { NavLink, useHistory } from 'react-router-dom';
import {  Nav, Table } from 'reactstrap';
import { getData } from '../../../app/productSlice';
import { Accordion, Button, Card } from 'react-bootstrap';
import { Field, Formik } from 'formik';
import './admin-product.scss';
import Anything from '../AdminInputProduct';

function AdminProduct(props) {

    const access = useSelector(state => state.users.isAdmin);

    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {

      firestore.collection("products").get().then(function(querySnapshot) {
        const products = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            products.push({...doc.data(), id: doc.id});      
        });
        setProductList(products);
      });

      firestore.collection("product-categories").get().then(function(querySnapshot) {
        const cates = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            cates.push({...doc.data(), id: doc.id});      
        });
        setCategories(cates);
    });

    }, []);

    if(access === false){
      return(
        <h1>Loading...
        </h1>
      )
    }
    else{
      return (
        <div>
            <h1>Admin Side</h1>
            {/* <NavLink to="/admin-input-product">Add product</NavLink> */}
            <Anything/>
        </div>      
      );
    }  
}

export default AdminProduct;