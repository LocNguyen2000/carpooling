import customAxios from "./requests";

const authenticate = (param) => customAxios.post('authenticate', param).then(res => res.data);

const registerPassenger = (param) => customAxios.post('register-passenger', param).then(res => res.data);

const registerDriver = (param) => customAxios.post('register-driver', param).then(res => res.data);

const createCoor = (location) => customAxios.get(`https://graphhopper.com/api/1/geocode?q=${location}&locale=vi_VN&debug=true&key=a360ac4d-d5b8-436d-9ac3-d3af42a8c426`).then(res => res.data);

export default {
    authenticate,
    registerPassenger,
    registerDriver,
    createCoor
}
