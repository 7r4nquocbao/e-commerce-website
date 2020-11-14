import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Banner.scss';

Banner.propTypes = {

};

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__opacity">
        <div className="banner__info">
          <div className="banner__info__title">
            CORSAIR
          </div>
          <div className="banner__info__description">
            Provide gaming headsets, gaming PC cases,
            RGB fans, CPU liquid cooling, gaming keyboards,
            gaming mice, gaming PCs, gaming power supplies,
            DDR4 memory, and ...
          </div>
          <div className="button">
            <Link to="">Learn more</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;