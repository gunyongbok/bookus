import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiBook } from 'react-icons/bi';
import ModalPage from '../components/ModalPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginAtom } from '../atoms';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DEFAULT_SERVER_URL } from '../OAuth';

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
    right: 50px;
    top: 50px;
`;

const BookUl = styled.ul`
    display: flex;
    position: relative;
    bottom: 20px;
    width: 100%;
    height: 120%;
    flex-wrap: wrap;
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
        const accessTokenHeader = localStorage.getItem('accessToken');

        axios
            .get(`${DEFAULT_SERVER_URL}/api/v1/report`, {
                headers: {
                    'Access-token': `${accessTokenHeader}`,
                },
            })
            .then((response) => {
                setInfo(response);
                console.log(response.data.result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const bookData = info.data?.result;
    console.log(bookData);

    return (
        <>
            <TopContainer>
                <button onClick={RemoveHangler}>logout</button>
                <Container>
                    {modalHandle === true ? null : <Header>BOOKUS</Header>}
                    <Profile>
                        <CgProfile onClick={isLogin ? onClickProfile : showModal} />
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
                                    <BookLi key={data.bookId}>
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
