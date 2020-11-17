import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Container } from 'reactstrap';
import TopMenu from '../../components/TopMenu';
import InputField from '../../custom-fields/InputField';
Search.propTypes = {

};

function Search(props) {
  const initialValue = {
    search: '',
  }
  return (
    <div className="search">
      <TopMenu />
      <Formik
        initialValues={initialValue}
      >
        {formikProps => {
          //do something
          const { values, error, touched } = formikProps;
          console.log({ values, error, touched });
          return (
            <Container>
              <Form>
                <FastField
                  name="search"
                  component={InputField}

                  placeholder="Search..."
                >
                </FastField>
              </Form>
            </Container>
          )
        }
        }
      </Formik>
    </div>
  );
}

export default Search;