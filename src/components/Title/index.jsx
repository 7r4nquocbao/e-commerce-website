import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';
import { Container } from 'reactstrap';

Title.propTypes = {
  title: PropTypes.string,
};
Title.defaultProps = {
  title: '',
}

function Title(props) {
  const { title } = props;
  const hasTitle = (title) ? <h3>{title}</h3> : 'No title'
  return (
    <Container className="title">
      <h3>{hasTitle}</h3>
    </Container>
  );
}

export default Title;