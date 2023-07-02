import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import profileLoginImg from '../Image/Profile.png';
import DeleteModal from '../components/DeleteModal';

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

const DeleteContainer = styled.div`
    height: 5%;
    width: 6%;
    display: flex;
    position: relative;
    top: -10px;
    left: 70px;
    color: #6e6e6e;
    font-size: 13px;
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

const DateDetails = styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
`;

const TitleDetails = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
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

const BookReportUl = styled.ul`
    width: 100%;
    height: 90%;
    position: relative;
    top: 20px;
    display: flex;
    flex-direction: column;
`;

const StyledLinkBox = styled(Link)`
    color: black;
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
    }
`;

const BookReportLi = styled.li`
    flex: 1;
    height: 15%;
    width: 107%;
    position: relative;
    left: -40px;
    border-bottom: 1px solid #c3c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: 400;
`;

const BookReportBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const BookReportDate = styled.div`
    width: 25%;
    height: 100%;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
`;

const BookReportTitle1 = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
`;

const Storage = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const [bookData, setBookData] = useState([]);
    const [modalHandle, setModalHandle] = useState(false);

    const showModal = () => {
        setModalHandle(true);
    };

    const getBookReport = () => {
        const accessTokenHeader = localStorage.getItem('accessToken');
        const options = {
            headers: {
                'Access-token': `${accessTokenHeader}`,
            },
        };
        axios
            .get(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/report/${id}`, options)
            .then((response) => {
                const result = response.data.result;
                setBookData(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBookReport();
    }, []);

    console.log(state);

    const MAX_BOOKS = 7;

    return (
        <>
            <TopContainer>
                <Container>
                    {modalHandle && <DeleteModal setModalHandle={setModalHandle} id={id} />}
                    <Header>
                        <StyledLink to="/">BOOKUS</StyledLink>
                    </Header>
                    <Profile>
                        <img src={profileLoginImg} alt="profile" style={{ width: '35px' }} />
                    </Profile>
                    <Main>
                        <DeleteContainer onClick={showModal}>X Delete</DeleteContainer>
                        <BookInfo>
                            <ImgBox>
                                <img src={state.thumbnail} alt={state.thumbnail} style={{ width: '205px', height: '300px' }} />
                            </ImgBox>
                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>{state.title.length > 10 ? `${state.title.slice(0, 20)}...` : state.title}</h3>
                                <h4 style={{ fontSize: '12px', fontWeight: '400', margin: '0' }}>{state.author[0]}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>
                            <BookReportTitle>
                                <DateDetails>Page</DateDetails>
                                <DateDetails>Date</DateDetails>
                                <TitleDetails>Title</TitleDetails>
                            </BookReportTitle>
                            <BookReportUl>
                                {[...Array(MAX_BOOKS)].map((_, index) => {
                                    const data = bookData?.[index];

                                    if (index === bookData.length) {
                                        return (
                                            <BookReportLi key={index}>
                                                <StyledLinkBox to="/bookreport" state={{ book: state }}>
                                                    +
                                                </StyledLinkBox>
                                            </BookReportLi>
                                        );
                                    } else if (data) {
                                        return (
                                            <BookReportLi key={index}>
                                                <BookReportBox>
                                                    <BookReportDate>{`${data['startPage']} - ${data['endPage']} p`}</BookReportDate>
                                                    <BookReportDate>{data['startDate']}</BookReportDate>
                                                    <BookReportTitle1>{data['title']}</BookReportTitle1>
                                                </BookReportBox>
                                            </BookReportLi>
                                        );
                                    } else {
                                        return <BookReportLi key={index}></BookReportLi>;
                                    }
                                })}
                            </BookReportUl>
                        </BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Storage;
