import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import axios from 'axios';

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
    background-color: #e8e5e5;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    position: relative;
    top: -20px;
    left: 60px;
    color: #6e6e6e;
`;

const DeleteBox = styled.div`
    font-size: 13px;
    position: relative;
    top: 3px;
    left: 5px;
`;

const Storage = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        const accessTokenHeader = localStorage.getItem('accessToken');
        const options = {
            headers: {
                'Access-token': `${accessTokenHeader}`,
            },
        };
        axios
            .put(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/report/book/${id}`, id, options)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        navigate('/');
    };

    console.log(id);

    return (
        <>
            <TopContainer>
                <Container>
                    <Header>BOOKUS</Header>
                    <Profile>
                        <CgProfile />
                    </Profile>
                    <Main>
                        <DeleteContainer onClick={handleDelete}>
                            x <DeleteBox>Delete</DeleteBox>
                        </DeleteContainer>
                        <BookInfo>
                            <ImgBox>
                                <img src={state.thumbnail} alt={state.thumbnail} style={{ width: '205px', height: '300px' }} />
                            </ImgBox>

                            <BookTitleAuthor>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>{state.title}</h3>
                                <h4 style={{ fontSize: '12px', fontWeight: '400', margin: '0' }}>{state.author[0]}</h4>
                            </BookTitleAuthor>
                        </BookInfo>
                        <BookReportListContainer>독서록 나타날 부분</BookReportListContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Storage;
