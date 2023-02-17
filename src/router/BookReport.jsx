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
    width: 1100px;
    height: 480px;
    position: absolute;

    top: 130px;
    display: flex;
`;

const BookInfo = styled.div`
    width: 20%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BookTitleAuthor = styled.div`
    width: 60%;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
`;

const BookReportListContainer = styled.div`
    width: 75%;
    height: 100%;
`;

const TitleInput = styled.input`
    width: 100%;
    height: 10%;
    border: none;
    border-bottom: 1px solid gray;
    &::placeholder {
        font-size: 20px;
        font-weight: 500;
    }
`;

const ContentsInput = styled.textarea`
    width: 100%;
    height: 85%;
    border: none;
    margin-top: 15px;
    &::placeholder {
        font-size: 10px;
        font-weight: 400;
    }
`;

const BookReport = () => {
    const books = useLocation().state.book;
    console.log(books);
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
                            <img src={books.thumbnail} alt={books.thumbnail} style={{ width: '135px', height: '190px' }} />
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '12px', fontWeight: '700', marginBottom: '5px' }}>{books.title}</h3>
                                <h4 style={{ fontSize: '10px', fontWeight: '400', margin: '0' }}>{books.authors}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>
                            <TitleInput placeholder="제목을 입력하세요."></TitleInput>
                            <ContentsInput placeholder="내용을 입력하세요."></ContentsInput>
                        </BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default BookReport;
