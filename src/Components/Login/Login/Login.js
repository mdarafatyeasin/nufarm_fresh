import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Social/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const handleResetButton = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    return (
        <div className='login-container'>
            <h1 className='login-title'>Please log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <button className='resat-button'  onClick={handleResetButton}>&#x21bb; Reset Password</button>
                    <ToastContainer />
                </Form.Group>
                {errorElement}
                <div className='logIn-container'>
                    <Button className='logIn-button' variant="primary" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>
            <p>New to Ultmate Wild? <Link className='togol-link' to="/signup">Please Sign-up</Link> </p>

            <SocialLogin></SocialLogin>
            
        </div>
        
    );
};

export default Login;