import React from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../../../../components/TopMenu';
import SubBanner from '../../../../components/Banner/SubBanner';
import { Container, Table } from 'reactstrap';
import './Details.scss';
import DetailsImg from '../../../../assets/images/images.jpg';
import Title from '../../../../components/Title';


Details.propTypes = {

};

function Details(props) {
  return (
    <div>
      <TopMenu />
      <SubBanner />

      <Container>

        <div className="product-detail">
          <div className="product-detail__img">
            <img src={DetailsImg} />
          </div>
          <div className="product-detail__info">
            <div className="detail-title">
              <p>Acer Nitro</p>
            </div>
            <div className="detail-info">
              <p>Model Name: NITRO VG252QP</p>
              <p>Part Number: UM.KV2EE.P01</p>

              <p>Speed is at the core of this display. As an NVIDIA® G-SYNC® Compatible monitor, these high-speed IPS panels feature high refresh rates at up to 240Hz1, up to min. 0.1ms2 response times and a range of resolutions such as FHD or WQHD. Combined, these grant fluid, seamless gameplay at your fingertips.</p>
            </div>
            <div className="detail-price">
              <p>500$</p>
            </div>
            <div className="btn-addToCart">
              Add to cart
            </div>
          </div>
        </div>

        <Title title="Related Products" />
        <div className="related-products">
        </div>

        <Title title="Details" />
        <div className="table-detail">
          <Table striped>
            <tbody>
              <tr>
                <th>Name</th>
                <td>Acer Nitro monitor</td>
              </tr>
              <tr>
                <th>Screen size</th>
                <td>24.5"</td>
              </tr>
              <tr>
                <th>Maximum resolution</th>
                <td>(Full HD)1920 x 1080@144 Hz</td>
              </tr>
              <tr>
                <th>Aspect ratio</th>
                <td>16:9</td>
              </tr>
              <tr>
                <th>Contrast ratio</th>
                <td>1,000:1</td>
              </tr>
              <tr>
                <th>Colour Supported</th>
                <td>16.7 Million</td>
              </tr>
              <tr>
                <th>Adaptive Contrast Management (ACM)</th>
                <td>100,000,000:1</td>
              </tr>
              <tr>
                <th>Brightness</th>
                <td>400 cd/m²</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <Title title="Customer's Evaluate" />

      </Container>
    </div>
  );
}

export default Details;