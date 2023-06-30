import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profileLoginImg from '../Image/Profile.png';
import axios from 'axios';
import { useState } from 'react';

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
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const BookReportTitle = styled.div`
    width: 100%;
    height: 8%;
    border-bottom: 2px solid black;
    position: absolute;
    top: 0;
    display: flex;
`;

const TitleDetails = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
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

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
`;

const BookList = (props) => {
    const [info, setInfo] = useState([]);
    const bookInfo = useLocation().state.books;

    const getBookReport = () => {
        const accessTokenHeader = localStorage.getItem('accessToken');

        axios
            .get(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/report`, {
                headers: {
                    'Access-token': accessTokenHeader,
                },
            })
            .then((response) => {
                setInfo(response);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const propsTitle = bookInfo.title;
    const bookData = info.data?.result;
    const bookInfoBox = [];
    bookData.map((e) => {
        if (e['title'] === propsTitle) {
            bookInfoBox.push(e);
        }
    });
    const firstOfBox = bookInfoBox[0];
    console.log(firstOfBox);

    return (
        <>
            <TopContainer>
                <Container>
                    <Header>
                        <StyledLink to="/">BOOKUS</StyledLink>
                        <button onClick={getBookReport}>hi</button>
                    </Header>
                    <Profile>
                        <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                    </Profile>
                    <Main>
                        <BookInfo>
                            <ImgBox>
                                <img src={firstOfBox['thumbnail']} style={{ width: '205px', height: '300px' }} />
                            </ImgBox>
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>{firstOfBox['title']}</h3>
                                <h4 style={{ fontSize: '12px', fontWeight: '400', margin: '0' }}>{firstOfBox['author'][0]}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>
                            <BookReportTitle>
                                <TitleDetails>Page</TitleDetails>
                                <TitleDetails>Date</TitleDetails>
                                <TitleDetails>Title</TitleDetails>
                                <TitleDetails>Text</TitleDetails>
                            </BookReportTitle>
                            <Link to="/bookreport" state={{ book: firstOfBox }}>
                                독서록 작성하기(이 부분 리스트로 표현될 예정)
                            </Link>
                        </BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default BookList;
