import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

const TopContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 1200px;
    height: 670px;
    position: relative;
    display: flex;
    justify-content: center;
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
    top: 70px;
`;

const Main = styled.div`
    background-color: white;
    width: 1000px;
    height: 480px;
    position: absolute;
    left: 80px;
    top: 130px;
    display: flex;
`;

const BookInfo = styled.div`
    position: relative;
    top: 10px;
    width: 25%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`;

const BookReportListContainer = styled.div`
    width: 73%;
    height: 100%;
    background-color: yellow;
`;

const BookTitleAuthor = styled.div`
    width: 82%;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
`;

const ImgBox = styled.div`
    width: 205px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) -4px 5px 15px;
`;

const Storage = () => {
    const { state } = useLocation();
    const { id } = useParams();

    return (
        <>
            <TopContainer>
                <Container>
                    <Header>BOOKUS</Header>
                    <Profile>
                        <CgProfile />
                    </Profile>
                    <Main>
                        <BookInfo>
                            <ImgBox>
                                <img src={state.thumbnail} alt={state.thumbnail} style={{ width: '205px', height: '300px' }} />
                            </ImgBox>

                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>{state.title}</h3>
                                <h4 style={{ fontSize: '15px', fontWeight: '400', margin: '0' }}>{state.author[0]}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer></BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Storage;
