import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RuquairAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
      return <h2>Loading....</h2>
  }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return children
};

export default RuquairAuth;