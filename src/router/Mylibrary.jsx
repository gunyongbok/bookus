import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiBook } from 'react-icons/bi';
import Table from '../components/Table';
import ModalPage from '../components/ModalPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
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
    left: 90px;
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

const Mylibrary = () => {
    const [data, setData] = useState([]);
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
                setData(response);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                            <Table />
                        </BookContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Mylibrary;
