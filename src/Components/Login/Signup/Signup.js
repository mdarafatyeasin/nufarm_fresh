import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Signup.css"
import auth from "../../../firebase.init"
import SocialLogin from '../Social/SocialLogin';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const navigate = useNavigate();
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSignUp = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div className='login-container'>
            <h1 className='login-title'>Please Sign up</h1>
            <form onSubmit={handleSignUp} className='register-form'>
                <label><strong>First Name:</strong> </label> <br />
                <input type="text" name='first-name' placeholder='Enter your first name' /> <br />
                <label><strong>Last Name:</strong> </label> <br />
                <input type="text" name='last-name' placeholder='Enter your lase name' /> <br />
                <label><strong>Email:</strong> </label> <br />
                <input ref={emailRef} type="text" name='email' placeholder='Enter your email' required /> <br />
                <label><strong>Password:</strong> </label> <br />
                <input ref={passwordRef} type="password" name='password' placeholder='Enter your password' required /> <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='togol-link' to="/login">Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;