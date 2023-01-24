import React, { useState } from 'react';
import { useEffect } from 'react';
import { bookSearch } from '../components/api';
import Item from '../components/Item';

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

    // 엔터를 눌렀을 때 호출 되는 함수
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            setQuery(text);
        }
    };
    // text 검색어가 바뀔 때 호출되는 함수.
    const onTextUpdate = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        if (query.length > 0) {
            bookSearchHttpHandler(query, true);
        }
    }, [query]);

    // book search 핸들러
    const bookSearchHttpHandler = async (query, reset) => {
        // paramter 설정
        const params = {
            query: query,
            sort: 'accuracy', // accuracy | recency 정확도 or 최신
            page: page, // 페이지번호
            size: 3, // 한 페이지에 보여 질 문서의 개수
        };

        const { data } = await bookSearch(params);
        if (reset) {
            setBooks(data.documents);
        } else {
            setBooks(books.concat(data.documents));
        } // api 호출
        console.log(data);
    };

    return (
        <>
            <input
                type="search"
                placeholder="검색어를 입력하시오"
                name="query"
                onKeyDown={onEnter} //enter
                onChange={onTextUpdate} //change
                value={text}
            />
            <ul>
                {books?.map((a, i) => (
                    <Item key={i} title={a.title} />
                ))}
            </ul>
            <button onClick={upPage}>+</button>

            {page <= 1 ? (
                <button disabled="disabled" onClick={downPage}>
                    -
                </button>
            ) : (
                <button onClick={downPage}>-</button>
            )}
        </>
    );
};

export default Search;
