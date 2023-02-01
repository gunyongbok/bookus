import React from 'react';
import styled from 'styled-components';
import KakaoLoginImg from '../Image/kakao.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(226, 226, 226, 0.65);
    border-radius: 8px;
    display: flex;
    justify-content: center;
`;

const Close = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 999;
`;

const Main = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 140px;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    font-weight: 300;
    position: relative;
    top: -80px;
`;

const Image = styled.img.attrs({
    src: `${KakaoLoginImg}`,
})`
    width: 200px;
    height: 30px;
    margin-bottom: 10px;
`;

const RollIn = styled.div`
    background-color: black;
    width: 200px;
    height: 30px;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;

const ModalPage = ({ setModalHandle }) => {
    const closeModal = () => {
        setModalHandle(false);
    };

    return (
        <>
            <Container>
                <Close onClick={closeModal}>X</Close>
                <Main>
                    <Header>BOOKUS</Header>
                    <Link to="/login">
                        <Image />
                    </Link>
                    <RollIn>회원가입</RollIn>
                </Main>
            </Container>
        </>
    );
};

export default ModalPage;
