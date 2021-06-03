import customAxios from "./requests";

const authenticate = (param) => customAxios.post('authenticate', param).then(res => res.data);

const registerPassenger = (param) => customAxios.post('register-passenger', param).then(res => res.data);

const registerDriver = (param) => customAxios.post('register-driver', param).then(res => res.data);

export default {
    authenticate,
    registerPassenger,
    registerDriver,
}
