import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SERVER_URL } from '../OAuth';

const LoginResult = () => {
    const location = useLocation();
    const code = location.search.split('=')[1];
    console.log(code);

    const ApiCall = async () => {
        try {
            const response = await axios.get(`${DEFAULT_SERVER_URL}/api/v1/oauth/kakao/authorization?code=${code}`);
            console.log('response >>', response);
        } catch (err) {
            console.log('Error >>', err);
        }
    };

    return (
        <>
            <button onClick={ApiCall}>login</button>
        </>
    );
};

export default LoginResult;
