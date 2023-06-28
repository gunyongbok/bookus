import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import ModalPage from '../components/ModalPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginAtom } from '../atoms';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const Main = styled.div`
    background-color: white;
    width: 900px;
    height: 480px;
    position: absolute;
    left: 150px;
    top: 130px;
`;

const Library = styled.div`
    width: 100%;
    position: relative;
    left: 60px;
    top: -10px;
    display: flex;
    align-items: center;
    height: 15%;
    margin-left: 20px;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 85%;
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 60px;
`;

const ProfileBox = styled.div`
    font-size: 30px;
    position: absolute;
    right: 75px;
    top: 58px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 35px;
    text-decoration: underline;
    text-decoration-color: black;
`;

const BookUl = styled.ul`
    display: flex;
    position: relative;
    bottom: 20px;
    width: 100%;
    height: 120%;
    flex-wrap: wrap;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const BookLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18%;
    height: 45%;
    list-style: none;
    border-bottom: 2px solid black;
    margin-left: 2%;
    padding-top: 15px;
`;

const PlusLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18%;
    height: 45%;
    list-style: none;
    border-bottom: 2px solid rgba(160, 160, 160, 0.65);
    margin-left: 2%;
    padding-top: 15px;
`;

const PlusBox = styled.div`
    width: 120px;
    height: 174px;
    position: relative;
    top: -18px;
    background-color: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

const Mylibrary = () => {
    const [info, setInfo] = useState([]);
    const [modalHandle, setModalHandle] = useState(false);
    const isLogin = useRecoilValue(isLoginAtom);
    const setLogin = useSetRecoilState(isLoginAtom);
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    const onClickProfile = () => {
        navigate('/userprofile');
    };

    const showModal = () => {
        setModalHandle(true);
    };

    if (userName !== null) {
        setLogin(true);
    }

    console.log(isLogin);

    const RemoveHangler = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('userName');
        window.location.reload();
    };

    useEffect(() => {
        if (isLogin) {
            const accessTokenHeader = localStorage.getItem('accessToken');

            axios
                .get(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/report`, {
                    headers: {
                        'Access-token': accessTokenHeader,
                    },
                })
                .then((response) => {
                    setInfo(response);
                    console.log(response.data.result);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [isLogin]);

    const bookData = info.data?.result;
    console.log(bookData);

    return (
        <>
            <TopContainer>
                <Container>
                    {modalHandle === true ? null : <Header>BOOKUS</Header>}
                    <button onClick={RemoveHangler}>logout</button>
                    {isLogin ? null : <ProfileBox>로그인해주세요</ProfileBox>}
                    <Profile>
                        <img src={profileLoginImg} alt="profile" onClick={isLogin ? onClickProfile : showModal} style={{ width: '35px' }} />
                    </Profile>
                    {modalHandle && <ModalPage setModalHandle={setModalHandle} />}

                    <Main>
                        <Library>
                            <BiBook />
                            My library
                        </Library>
                        <BookContainer>
                            <BookUl>
                                {bookData?.map((data) => (
                                    <BookLi
                                        onClick={() => {
                                            navigate(`bookreportstorage/${data.bookId}`, { state: data });
                                        }}
                                        key={data.bookId}
                                    >
                                        <img src={data.thumbnail} />
                                        <p style={{ fontSize: '13px' }}>{data.title}</p>
                                    </BookLi>
                                ))}
                                <PlusLi>
                                    <PlusBox>
                                        <Link to="/booksearch">
                                            <AiOutlinePlus />
                                        </Link>
                                    </PlusBox>
                                </PlusLi>
                            </BookUl>
                        </BookContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Mylibrary;
