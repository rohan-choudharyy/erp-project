
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import axios from 'axios';
import LoginWithGoogle from './LoginWithGoogle';
import './style.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: clientId,
            scope: ""
          });
        }
        gapi.load('client:auth2', start);
    }, []);

    const [values, setValues] = useState({
        email: '', password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/api/login`, values);
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    const handleGoogleLogin = async (googleData) => {
        try {
            const response = await axios.post(`${API_URL}/api/google-login`, {
                token: googleData.tokenId,
            });
            localStorage.setItem("token", response.data.token);
            navigate('/dashboard');
        } catch (error) {
            setError('Google login failed');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-warning'>
                    {error && error}
                </div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name='email' autoComplete='off' placeholder='Enter Email' onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'> 
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name='password' placeholder='Enter Password' onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                    <LoginWithGoogle clientId={clientId} onSuccess={handleGoogleLogin} onFailure={() => setError('Google login failed')} />
                    <div className='mb-1'> 
                        <input type="checkbox" name="tick" id="tick" className='me-2'/>
                        <label htmlFor="tick">You agree with terms & conditions</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;