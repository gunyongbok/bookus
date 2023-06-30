import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BsList } from 'react-icons/bs';
import { AiOutlineSave } from 'react-icons/ai';
import profileLoginImg from '../Image/Profile.png';

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
    top: 10px;
    right: 15px;
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 30px;
`;

const Main = styled.form`
    background-color: white;
    width: 1100px;
    height: 480px;
    position: absolute;
    top: 130px;
    display: flex;
`;

const BookInfo = styled.div`
    width: 20%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BookTitleAuthor = styled.div`
    position: relative;
    left: 0px;
    width: 67%;
    height: 30%;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
    border-top: 2px solid black;
`;

const BookReportListContainer = styled.div`
    width: 75%;
    height: 90%;
    position: relative;
    top: 10px;
`;

const PageReportContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;
    font-size: 13px;
`;

const StartPage = styled.input`
    width: 15%;
    border: none;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    &::placeholder,
    :focus {
        font-size: 12px;
        font-weight: 300;
        outline: none;
    }
`;

const EndPage = styled.input`
    width: 15%;
    border: none;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    &::placeholder,
    :focus {
        font-size: 12px;
        font-weight: 300;
        outline: none;
    }
`;

const TitleInput = styled.input`
    padding-bottom: 5px;
    width: 88%;
    height: 10%;
    border: none;
    font-size: 25px;
    font-weight: 600;
    &::placeholder,
    :focus {
        font-size: 25px;
        font-weight: 600;
        outline: none;
    }
`;

const ContentsInput = styled.textarea`
    width: 100%;
    height: 85%;
    border: none;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 400;
    &::placeholder,
    :focus {
        font-size: 15px;
        font-weight: 400;
        outline: none;
    }
`;

const DateLabel = styled.label`
    padding-bottom: 5px;
    width: 5%;
    height: 10%;
    border: none;
    font-size: 15px;
    font-weight: 600;
    position: relative;
    top: 12px;
    left: -5px;
`;

const DateInput = styled.input`
    padding-bottom: 6px;
    width: 20%;
    height: 10%;
    border: none;
    font-size: 15px;
    font-weight: 300;
    position: relative;
    top: 8px;
    &::placeholder,
    :focus {
        font-size: 15px;
        font-weight: 300;
        outline: none;
    }
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid gray;
`;

const FooterBar = styled.footer`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 25px;
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

const BookReport = () => {
    const selectedBookData = useLocation().state.book;
    // console.log(selectedBookData);
    const [contents, setContents] = useState('');
    const [startDate, setstartDate] = useState('');
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(0);
    const [title, setTitle] = useState('');

    const saveBookReport = () => {
        console.log(contents);
        console.log(startDate);
        console.log(startPage);
        console.log(endPage);
        console.log(title);
    };

    return (
        <>
            <TopContainer>
                <Container>
                    <Header>
                        <StyledLink to="/">BOOKUS</StyledLink>
                    </Header>
                    <Profile>
                        <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                    </Profile>
                    <Main>
                        <BookInfo>
                            <img src={selectedBookData.thumbnail} alt={selectedBookData.thumbnail} style={{ width: '145px', height: '190px' }} />
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '5px' }}>{selectedBookData.title}</h3>
                                <h4 style={{ fontSize: '12px', fontWeight: '400', margin: '0' }}>{selectedBookData.authors}</h4>
                                <PageReportContainer>
                                    Page
                                    <StartPage placeholder="000" />-<EndPage placeholder="000" /> p
                                </PageReportContainer>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>
                            <InputContainer>
                                <TitleInput placeholder="제목을 입력하세요."></TitleInput>
                                <DateLabel htmlFor="date">Date</DateLabel>
                                <DateInput id="date" type="date"></DateInput>
                            </InputContainer>
                            <ContentsInput placeholder="내용을 입력하세요."></ContentsInput>
                            <FooterBar>
                                <BsList />
                                <AiOutlineSave />
                            </FooterBar>
                        </BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default BookReport;
