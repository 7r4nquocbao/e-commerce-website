import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { fb, firestore } from '../../../app/firebase';
import { adminRoleId } from '../../../models/Role';
import { useHistory } from 'react-router-dom';

AdminProduct.propTypes = {
    
};

function AdminProduct(props) {

    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {

        fb.auth().onAuthStateChanged(function(user) {
        if (user) {
          
          firestore.collection('role-user').get().then(function(querySnapshot) {
            const list = [];
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                list.push({...doc.data(), id: doc.id});      
            });
            if(adminRoleId !== list[list.findIndex(role => role.user === user.uid)].role){
              history.push('/');
            }
          });

          setUser(user);
        } else {
          // No user is signed in.
        }
      });

    }, [])
    
    return (
      
      setTimeout(() => {
          <div>
              <h1>Admin Side</h1>
              <h2>{JSON.stringify(user)}</h2>
          </div>
      }, 500)
      
    );
    
}

export default AdminProduct;