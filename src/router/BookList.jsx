import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

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
    width: 750px;
    height: 480px;
    position: absolute;
    left: 250px;
    top: 130px;
    display: flex;
`;

const BookInfo = styled.div`
    width: 35%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BookReportListContainer = styled.div`
    width: 60%;
    height: 100%;
    background-color: yellow;
`;

const BookTitleAuthor = styled.div`
    width: 60%;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
`;

const BookList = (props) => {
    const bookInfo = useLocation().state.books;

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
                            <img src={bookInfo.thumbnail} alt={bookInfo.thumbnail} style={{ width: '155px', height: '230px' }} />
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '5px' }}>{bookInfo.title}</h3>
                                <h4 style={{ fontSize: '10px', fontWeight: '400', margin: '0' }}>{bookInfo.authors}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>
                            <Link to="/bookreport" state={{ book: bookInfo }}>
                                Hi
                            </Link>
                        </BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default BookList;
