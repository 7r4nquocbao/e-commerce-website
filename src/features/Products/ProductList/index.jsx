import axios from 'axios';
import React, { Component } from 'react';
import { Col, Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row } from 'reactstrap';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  };

  componentDidMount() {
    const path = 'https://jkbc8.sse.codesandbox.io/products';
    axios.get(path).then(res => {

      this.setState({
        products: res.data,
      })
    })
  }
  render() {
    const { products } = this.state;
    return (

      <Container>
        <Row>

          {
            products.length > 0 && products.map((product, index) => (
              <Col md="3">
                <Card>
                  <CardImg top width="100%" src="https://i1-giaitri.vnecdn.net/2020/11/11/sonyejinava-1605087025-6323-1605087144.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=gCmfGtI0uaz9jCegx8us-A" alt="Card image cap" />
                  <CardBody>
                    <CardTitle key={index} tag="h5">{product.productName}</CardTitle>
                    <CardText>{product.productDescription}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            ))

          }
          <div className="product">
            <div className="product__image"></div>
            <div className="product__title"></div>
            <div className="product__price"></div>

          </div>


        </Row>
      </Container>

    )
  }
}

export default ProductList;