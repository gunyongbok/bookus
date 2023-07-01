import React from 'react';
import styled from 'styled-components';
import profileLoginImg from '../Image/Profile.png';
import { Link } from 'react-router-dom';

const TopContainer = styled.div`
    display: flex;
    position: relative;
    top: -30px;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 1200px;
    height: 670px;
    position: relative;
    z-index: 1;
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

const Main = styled.div`
    background-color: white;
    width: 900px;
    height: 480px;
    position: absolute;
    left: 150px;
    top: 160px;
    border-top: 1px solid #bcbaba;
    border-bottom: 1px solid #bcbaba;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 60px;
`;

const XBox = styled.div`
    height: 5%;
    width: 97%;
    display: flex;
    justify-content: end;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 22px;
    color: #bcbaba;
`;
const MainProfileBox = styled.div`
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserNameBox = styled.div`
    margin: 30px 0 30px 0;
`;

const UserInfoBox = styled.div`
    color: #514f4f;
`;

const StyledLink = styled(Link)`
    width: 80%;
    height: 10%;
    background-color: yellow;
    color: black;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`;

const LogoutButton = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background-color: #dbdada;
    border-radius: 5px;
    color: #6a6868;
`;

const UserProfile = () => {
    const userName = localStorage.getItem('userName');

    const RemoveHangler = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        window.location.href = '/';
    };

    return (
        <TopContainer>
            <Container>
                <Header>BOOKUS</Header>
                <Profile>
                    <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                </Profile>
                <Main>
                    <XBox>x</XBox>
                    <MainProfileBox>
                        <img src={profileLoginImg} alt="profile" style={{ width: '80px' }} />
                        <UserNameBox>
                            <b>{userName}</b> 님
                        </UserNameBox>
                        <UserInfoBox>qhrrjsdyd123@gmail.com</UserInfoBox>
                        <UserInfoBox>010-1234-5678</UserInfoBox>
                        <StyledLink to={'/'}>
                            <LogoutButton onClick={RemoveHangler}>로그아웃</LogoutButton>
                        </StyledLink>
                    </MainProfileBox>
                </Main>
            </Container>
        </TopContainer>
    );
};

export default UserProfile;
