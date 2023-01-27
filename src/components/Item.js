import React from 'react';
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

const Item = (props) => {
    return (
        <Li>
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
