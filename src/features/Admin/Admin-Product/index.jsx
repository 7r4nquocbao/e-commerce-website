import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { fb } from '../../../app/firebase';

AdminProduct.propTypes = {
    
};

function AdminProduct(props) {

    const [user, setUser] = useState({});

    useEffect(async () => {

        fb.auth().onAuthStateChanged(function(user) {
            if (user) {
              setUser(user);
            } else {
              // No user is signed in.
            }
          });

    }, [])
    
    return (
        <div>
            <h1>Admin Side</h1>
            <h2>{JSON.stringify(user)}</h2>
        </div>
    );
}

export default AdminProduct;