import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fb } from '../../../app/firebase';
import { useHistory } from 'react-router-dom';

Profile.propTypes = {
    
};

function Profile(props) {

    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        fb.auth().onAuthStateChanged(function(user) {
        if (user) {
            setUser(user);
        } else {
            history.push('/login');
        }
        });
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            <h2>{JSON.stringify(user)}</h2>
        </div>
    );
}

export default Profile;