import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import profileLoginImg from '../Image/Profile.png';

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

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 60px;
`;

const Main = styled.div`
    background-color: white;
    width: 900px;
    height: 480px;
    position: absolute;
    left: 150px;
    top: 130px;
    border: 1px solid #6a6969;
    border-radius: 5px;
`;

const TopBox = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    border-bottom: 1px solid #c3c2c2;
`;

const TitleBox = styled.div`
    margin-left: 20px;
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
`;

const DateBox = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const ContentBox = styled.div`
    padding: 10px;
    height: 80%;
`;

const BookReportResult = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <TopContainer>
            <Container>
                <Header>
                    <StyledLink to="/">BOOKUS</StyledLink>
                </Header>
                <Profile>
                    <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                </Profile>
                <Main>
                    <TopBox>
                        <TitleBox>{state['title']}</TitleBox>
                        <DateBox>
                            작성일 : {state['startDate']} <br />
                            읽은 페이지 : {`${state['startPage']} - ${state['endPage']} p`}
                        </DateBox>
                    </TopBox>
                    <ContentBox>{state['contents']}</ContentBox>
                </Main>
            </Container>
        </TopContainer>
    );
};

export default BookReportResult;
