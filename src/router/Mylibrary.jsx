import React, { useState } from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { BiBook } from 'react-icons/bi';
import Table from '../components/Table';
import ModalPage from '../components/ModalPage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';

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

    return (
        <>
            <TopContainer>
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
