import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';

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
    justify-content: space-between;
    width: 90%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    font-weight: 250;
    position: absolute;
    top: 50px;
`;

const Profile = styled.div`
    font-size: 30px;
`;

const Main = styled.div`
    background-color: white;
    width: 750px;
    height: 480px;
    position: absolute;
    left: 250px;
    top: 130px;
`;

const BookInfo = styled.div`
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
`;

const BookReportListContainer = styled.div`
    width: 100%;
    height: 60%;
    background-color: yellow;
    position: absolute;
    bottom: 0;
`;

const BookTitleAuthor = styled.div`
    margin-left: 30px;
`;

const BookList = () => {
    const book = useLocation().state.books;
    return (
        <>
            <TopContainer>
                <Container>
                    <Header>
                        BOOKUS
                        <Profile>
                            <CgProfile />
                        </Profile>
                    </Header>
                    <Main>
                        <BookInfo>
                            <img src={book.thumbnail} alt={book.thumbnail} />
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '20px', fontWeight: '450' }}>{book.title}</h3>
                                <h4 style={{ fontSize: '10px', fontWeight: '400' }}>{book.authors}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer></BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default BookList;

{
    /* <li>
            <h3>{book.title}</h3>
            <h4>{book.authors}</h4>
            <img src={book.thumbnail} alt={book.thumbnail} />
        </li> */
}
