import axios from 'axios';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(226, 226, 226, 0.65);
    border-radius: 8px;
    display: flex;
    justify-content: center;
`;

const Main = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 100px;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    font-weight: 300;
    position: relative;
    top: -80px;
`;

const WelcomeUser = styled.div`
    width: 100%;
`;

const UserName = styled.h3`
    font-weight: 600;
    font-size: 13px;
`;

const FirstLRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;

const SecondLRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;

const RollIn = styled.div`
    background-color: #6e6e6e;
    width: 180px;
    height: 28px;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    position: relative;
    top: 30px;
    left: 60px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover,
    :focus,
    :visited {
        text-decoration: none;
    }
`;

const LoginResult = () => {
    const location = useLocation();
    const code = location.search.split('=')[1];

    const ApiCall = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/oauth/kakao/authorization?code=${code}`);
            console.log('response >>', response);

            localStorage.setItem('userId', response.data.result.userId);
            localStorage.setItem('userName', response.data.result.userName);
            localStorage.setItem('accessToken', response.data.result.accessToken);
            localStorage.setItem('refreshToken', response.data.result.refreshToken);
        } catch (err) {
            console.log('Error >>', err);
        }
    };

    useEffect(() => {
        ApiCall();
    }, []);

    const userName = localStorage.getItem('userName');

    console.log(userName);

    return (
        <>
            <Container>
                <Main>
                    <Header>BOOKUS</Header>
                    <WelcomeUser>
                        <FirstLRow style={{ display: 'flex' }}>환영합니다</FirstLRow>
                        <SecondLRow>북커스와 함께 독서 과정을 기록해보세요.</SecondLRow>
                        <StyledLink to="/">
                            <RollIn>시작하기</RollIn>
                        </StyledLink>
                    </WelcomeUser>
                </Main>
            </Container>
        </>
    );
};

export default LoginResult;
