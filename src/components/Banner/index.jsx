import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {

};

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__opacity">
        <div className="button">Discover</div>
      </div>
    </div>
  );
}

export default Banner;