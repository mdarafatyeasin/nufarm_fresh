import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./SocilaLogin.css"
import google from "../../../img/Social/google.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='divider-component'>
                <div className='divider'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='divider'></div>
            </div>
            {errorElement}
            <div className='social-container'>

                <button onClick={() => signInWithGoogle()} className='social-signin-button'>  <img src={google} alt="" />Google sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;