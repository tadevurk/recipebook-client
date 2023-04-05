import axious from 'axios';

const instance = axious.create({
    baseURL: 'http://localhost'
});

export default instance;