import React from 'react';
import { KAKAO_AUTH_URL } from '../OAuth';

const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
};

const Login = () => {
    return (
        <>
            <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Login;
