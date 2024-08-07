
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginWithGoogle = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default LoginWithGoogle;