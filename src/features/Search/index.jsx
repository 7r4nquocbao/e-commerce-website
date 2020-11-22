import { FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Container, FormGroup, Input, Row } from 'reactstrap';
import TopMenu from '../../components/TopMenu';
import { firestore } from '../../app/firebase';
import Product from '../Products';
Search.propTypes = {

};

function Search(props) {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
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

  const dataFiltered = data.filter(item => {
    return item.Name.toLowerCase().includes(search.toLowerCase());
  })

  const displayData = (arr) => {
    return(
      <Container>
        <Row>
          {
            arr.map((item, index) => {
            return(
                <Product product={item} key={index}/>
              )
            })
          }
        </Row>
      </Container>
    )
  }

  return (
    <div className="search">
      <TopMenu />
      <Container>
        <FormGroup>
          <Input type="text" placeholder="Typing to search" onChange={(event) => setSearch(event.target.value)}/>
        </FormGroup>
      </Container>
      {
        displayData(dataFiltered)
      }
    </div>
  );
}

export default Search;