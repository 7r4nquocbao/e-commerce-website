import React from 'react';
import './SubBanner.scss';

SubBanner.propTypes = {

};

function SubBanner(props) {
  return (
    <div className="subBanner">
      <div className="subBanner__1">
        <div className="subBanner__1__opacity1">
          <div className="button1">Discover</div>
        </div>
      </div>

      <div className="subBanner__2">
        <div className="subBanner__2__opacity2">
          <div className="button1">Discover</div>
        </div>
      </div>
    </div>

  );
}

export default SubBanner;