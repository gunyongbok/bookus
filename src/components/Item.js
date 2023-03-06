import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
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

        console.log(data);
        console.log(headers);

        axios
            .post(`${process.env.REACT_APP_DEFAULT_SERVER_URL}/api/v1/book`, data, { headers })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Li onClick={handleSubmit}>
            <StyledLink to={'/booklist'} state={{ books: props }}>
                <Container>
                    <ImgBox>
                        <img style={{ height: '140px', width: '110px' }} src={props.thumbnail} alt={props.thumbnail} />
                    </ImgBox>
                    <h3 style={{ fontSize: '12px', fontWeight: '500', height: '15%', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>{props.title}</h3>
                    <h4 style={{ fontSize: '10px', fontWeight: '300', width: '100%', display: 'flex', justifyContent: 'flex-start', position: 'absolute', bottom: '0' }}>{props.authors}</h4>
                </Container>
            </StyledLink>
        </Li>
    );
};

export default Item;
