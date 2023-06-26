import React from 'react';
import styled from 'styled-components';
import KakaoLoginImg from '../Image/kakao.png';
import profileLoginImg from '../Image/Profile.png';

const TopContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #e4e4e4;
    width: 1200px;
    height: 670px;
    position: relative;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    font-weight: 250;
    position: absolute;
    top: 50px;
    right: 15px;
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
`;

const Main = styled.div`
    background-color: white;
    width: 900px;
    height: 480px;
    position: absolute;
    left: 150px;
    top: 130px;
`;

const Image = styled.img.attrs({
    src: `${KakaoLoginImg}`,
})`
    width: 200px;
    height: 33px;
    position: relative;
    top: 380px;
    left: 350px;
`;

const handleLogin = () => {
    window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL;
};

const Login = () => {
    return (
        <>
            <TopContainer>
                <Container>
                    <Header>BOOKUS</Header>
                    <Profile>
                        <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                    </Profile>
                    <Main>
                        <Image onClick={handleLogin}></Image>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Login;
