import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TopTable = styled.table`
    position: relative;
    bottom: 20px;
    width: 80%;
    height: 100%;
    border-spacing: 20px;
`;

const Td = styled.td`
    border-bottom: 2px solid #e4e4e4;
`;

const NormalBox = styled.div`
    width: 120px;
    height: 160px;
    background-color: white;
`;

const PlusBox = styled.div`
    width: 110px;
    height: 150px;
    background-color: #e4e4e4;
    position: relative;
    right: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

const Table = () => {
    return (
        <div>
            <TopTable border="1">
                <thead>
                    <tr>
                        <Td>
                            <PlusBox>
                                <Link to="/bookreportlist">
                                    <AiOutlinePlusCircle />
                                </Link>
                            </PlusBox>
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                        <Td>
                            <NormalBox />
                        </Td>
                    </tr>
                </tbody>
            </TopTable>
        </div>
    );
};

export default Table;
