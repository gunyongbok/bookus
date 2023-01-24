import axios from 'axios';
import { REST_API_KEY } from '../OAuth';

const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
    headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`, // 공통으로 요청 할 헤더
    },
});

// search book api
export const bookSearch = (params) => {
    return Kakao.get('/v3/search/book', { params });
};
