import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomInput, FormGroup, Input, Label } from 'reactstrap';
import './RadioField.scss';

RadioField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,


};
RadioField.defaultProps = {
  type: '',
  id: '',
  label: '',

}

function RadioField(props) {
  const {
    form, field,
    type, label, id
  } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <div className="radio-button">
      <FormGroup>
        <CustomInput
          name={name}
          id={id}
          type="radio"
          value={id}
          checked={id === value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {label && <Label for={name}>{label}</Label>}
      </FormGroup>
    </div >

  );
}

export default RadioField;