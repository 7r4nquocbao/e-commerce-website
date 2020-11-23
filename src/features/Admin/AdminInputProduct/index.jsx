import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { firestore } from '../../../app/firebase';
import { Field, Formik } from 'formik';
import './admin-input-product.scss'
import { useHistory } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Accordion, Button, Card } from 'react-bootstrap';

InputProduct.propTypes = {
    
};

function InputProduct(props) {

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

    }, [productList]);

    const handleDeleteProduct = (productId) => {
      firestore.collection("products").doc(productId).delete().then(function() {
          console.log("Document successfully deleted!");
          setProductList(productList.filter(item => item.id !== productId));
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
    }

    return (
        <div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Add product
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Formik
                        initialValues={{ 
                            Name: '',
                            InputCost: 0,
                            Profit: 0,
                            Sale: 0,
                            Thumbnail: '',
                            Images: '',
                            Stock: 0,
                            InputDate: '',
                            idCategory: '',
                            idBrand: '',
                            isEnabled: true
                        }}
                        validate={values => {
                            const errors = {};
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            values.InputDate = new Date();
                            firestore.collection('products').add(values)
                            .then(function(docRef) {
                                console.log("Document written with ID: ", docRef.id);
                                setProductList([...productList, values]);
                            })
                            .catch(function(error) {
                                console.error("Error adding document: ", error);
                            });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Name}
                                placeholder='name'
                            />
                            {errors.Name && touched.Name && errors.Name}
                            <input
                                type="number"
                                name="InputCost"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.InputCost}
                                placeholder='input cost'
                            />
                            <input
                                type="number"
                                name="Profit"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Profit}
                                placeholder='profit'
                            />
                            <input
                                type="number"
                                name="Sale"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Sale}
                                placeholder='sale'
                            />
                            <input
                                type="text"
                                name="Thumbnail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Thumbnail}
                                placeholder='thumb'
                            />
                            <input
                                type="file"
                                name="Images"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Images}
                                placeholder='imgs'
                            />
                            <input
                                type="number"
                                name="Stock"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Stock}
                                placeholder='stock'
                            />
                            <Field as="select" name="idCategory">
                                {
                                    categories && categories.map((cate,index) => {
                                        return(
                                            <option key={index} value={cate.id}>{cate.Name}</option>
                                        )
                                    })
                                }
                            </Field>
                            <button type="submit">
                                Submit
                            </button>
                            </form>
                        )}
                    </Formik> 
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Input cost</th>
                  <th>Sold</th>
                  <th>Stock</th>
                  <th>Thumbnail</th>
                </tr>
              </thead>  
              <tbody>           
              {
                productList && productList.map((product, index) => {
                  return(                    
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{product.Name}</td>
                        <td>{product.InputCost}</td>
                        <td>###</td>
                        <td>{product.Stock}</td>
                        <td> <img width='30px' src={product.Thumbnail}/></td>
                        <td><button className='btn btn-danger' onClick={() => handleDeleteProduct(product.id)}>delete</button></td>
                      </tr>
                  )
                })
              }
              </tbody>
            </Table>
        </div>
    );
}

export default InputProduct;