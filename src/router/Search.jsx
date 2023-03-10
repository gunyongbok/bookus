import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { bookSearch } from '../components/api';
import Item from '../components/Item';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai';

const TopContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #e4e4e4;
    width: 1200px;
    height: 670px;
    position: relative;
`;

const Header = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 35px;
    font-weight: 250;
    position: absolute;
    top: 70px;
    right: 15px;
`;

const Profile = styled.div`
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 50px;
`;

const Main = styled.div`
    background-color: white;
    width: 850px;
    height: 400px;
    position: absolute;
    left: 180px;
    top: 170px;
`;

const SearchBox = styled.input`
    width: 380px;
    height: 30px;
    position: relative;
    top: 50px;
    left: 230px;
    padding-left: 20px;
    border-radius: 20px;
    &:focus {
        outline: none;
        background-color: white;
    }
`;

const SearchIcon = styled.button`
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 590px;
    top: 22px;
    border: transparent;
    background-color: transparent;
    border-left: 1px solid black;
    width: 40px;
    height: 20px;
`;

const SearchContainer = styled.div`
    position: relative;
    margin: 0;
    top: 70px;
    left: 160px;
    width: 550px;
    height: 250px;
    border-top: 1px solid #bcbaba;
    border-bottom: 1px solid #bcbaba;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    position: relative;
    left: -15px;
`;

const LeftBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 23px;
    position: absolute;
    top: 230px;
    left: 125px;
`;

const RightBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 23px;
    position: absolute;
    top: 230px;
    right: 105px;
`;

const XBtn = styled.div`
    font-size: 25px;
    font-weight: 350;
    color: #bcbaba;
    position: absolute;
    right: 40px;
    top: 30px;
`;

const Search = (props) => {
    const [books, setBooks] = useState([]);
    const [text, setText] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const upPage = () => {
        bookSearchHttpHandler(query, true);
        setPage((prev) => prev + 1);
    };

    const downPage = () => {
        bookSearchHttpHandler(query, true);
        setPage((prev) => prev - 1);
    };

    // ????????? ????????? ??? ?????? ?????? ??????
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            setQuery(text);
        }
    };
    // text ???????????? ?????? ??? ???????????? ??????.
    const onTextUpdate = (e) => {
        setText(e.target.value);
    };

    // book search ?????????
    const bookSearchHttpHandler = async (query, reset) => {
        // paramter ??????
        const params = {
            query: query,
            sort: 'accuracy', // accuracy | recency ????????? or ??????
            page: page, // ???????????????
            size: 3, // ??? ???????????? ?????? ??? ????????? ??????
        };

        const { data } = await bookSearch(params);
        if (reset) {
            setBooks(data.documents);
        } else {
            setBooks(books.concat(data.documents));
        } // api ??????
        console.log(data);
    };

    useEffect(() => {
        if (query.length > 0) {
            bookSearchHttpHandler(query, true);
        }
    }, [query]);

    return (
        <>
            <TopContainer>
                <Container>
                    <Header>BOOKUS</Header>
                    <Profile>
                        <CgProfile />
                    </Profile>
                    <Main>
                        <XBtn>x</XBtn>
                        <SearchBox
                            type="text"
                            placeholder="???????????? ???????????????"
                            name="query"
                            onKeyDown={onEnter} //enter
                            onChange={onTextUpdate} //change
                            value={text}
                        />
                        <SearchIcon onClick={onEnter}>
                            <AiOutlineSearch />
                        </SearchIcon>
                        {page <= 1 ? (
                            <LeftBtn disabled="disabled">
                                <AiOutlineLeft />
                            </LeftBtn>
                        ) : (
                            <LeftBtn onClick={downPage}>
                                <AiOutlineLeft />
                            </LeftBtn>
                        )}
                        <RightBtn onClick={upPage}>
                            <AiOutlineRight />
                        </RightBtn>
                        <SearchContainer>
                            <Ul>
                                {books?.map((book, index) => (
                                    <Item
                                        key={index}
                                        title={book.title}
                                        contents={book.contents}
                                        isbn={book.isbn}
                                        publisher={book.publisher}
                                        thumbnail={book.thumbnail}
                                        authors={book.authors[0]}
                                        url={book.url}
                                    />
                                ))}
                            </Ul>
                        </SearchContainer>
                    </Main>
                </Container>
            </TopContainer>
        </>
    );
};

export default Search;
