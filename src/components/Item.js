import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 110px;
    height: 250px;
    position: relative;
    top: -20px;
`;

const ImgBox = styled.div`
    height: 60%;
    width: 110px;
    border-bottom: 1px solid #bcbaba;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover,
    :focus,
    :visited {
        text-decoration: none;
    }
`;

const Item = (props) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        const accessTokenHeader = localStorage.getItem('accessToken');

        const data = {
            title: `${props.title}`,
            contents: `${props.contents}`,
            isbn: `${props.isbn}`,
            publisher: `${props.publisher}`,
            thumbnail: `${props.thumbnail}`,
            authors: [`${props.authors}`],
            url: `${props.url}`,
        };

        const headers = {
            'Access-token': `${accessTokenHeader}`,
        };

        axios
            .post(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/book`, data, { headers })
            .then((response) => {
                console.log(response);
                navigate('/booklist', { state: { books: props } });
            })
            .catch((error) => {
                console.log(error);
                console.log(error.response.data['responseCode']);
                if (error.response.data['responseCode'] === 4005) {
                    window.alert('이미 서재에 있는 도서입니다.');
                    return;
                }
            });
    };

    return (
        <Li onClick={handleSubmit}>
            <Container>
                <ImgBox>
                    <img style={{ height: '140px', width: '110px' }} src={props.thumbnail} alt={props.thumbnail} />
                </ImgBox>
                <h3 style={{ fontSize: '12px', fontWeight: '500', height: '15%', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>{props.title}</h3>
                <h4 style={{ fontSize: '10px', fontWeight: '300', width: '100%', display: 'flex', justifyContent: 'flex-start', position: 'absolute', bottom: '0' }}>{props.authors}</h4>
            </Container>
        </Li>
    );
};

export default Item;
