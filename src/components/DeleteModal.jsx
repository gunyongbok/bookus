import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Modal = styled.div`
    width: 1000px;
    height: 500px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.9); /* White color with 50% transparency */
    position: relative;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 120px;
`;

const ModalPopUp = styled.div`
    width: 45%;
    height: 50%;
    border-radius: 10px;
    border: 1px solid black;
    position: relative;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ModalPopUpTitle = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin: 40px 0 30px 0;
`;

const ModalPopUpButtonContainer = styled.div`
    width: 60%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ModalPopUpButton = styled.button`
    width: 27%;
    height: 60%;
    background-color: #dbd7d7;
    border: none;
    border-radius: 5px;
    font-size: 12px;
`;

const DeleteModal = ({ setModalHandle, id }) => {
    const navigate = useNavigate();
    const closeModal = () => {
        setModalHandle(false);
    };

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
        window.location.href = '/';
    };

    return (
        <Modal>
            <ModalPopUp>
                <ModalPopUpTitle>
                    이 책과 해당 책의 독서 기록이 모두 삭제됩니다.
                    <br /> 삭제하시겠습니까?
                </ModalPopUpTitle>
                <ModalPopUpButtonContainer>
                    <ModalPopUpButton onClick={handleDelete}>예(Y)</ModalPopUpButton>
                    <ModalPopUpButton onClick={closeModal}>아니오(N)</ModalPopUpButton>
                </ModalPopUpButtonContainer>
            </ModalPopUp>
        </Modal>
    );
};

export default DeleteModal;
