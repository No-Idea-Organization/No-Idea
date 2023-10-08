import axios from 'axios';

const ideaURL = 'http://localhost:8080';

export const ideaAPI = axios.create({
    baseURL: ideaURL
});

export const getProducts = async (startIndex, endIndex) => {
    ideaAPI.get('/product/all', {
        params: {start: startIndex, end: endIndex}
    }).then((res) => {
        console.log(res.data);
    });
}

export const getCatagory = async () => {

}

export const getBySearch = async () => {

}

