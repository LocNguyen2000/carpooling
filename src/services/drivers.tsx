import { DRIVER_API } from "../constants/api";
import customAxios from "./requests";

const createGroup = (param) => customAxios.post(DRIVER_API + 'create-coordinate', param).then(res => res.data)

const updateGroup = (id) => customAxios.put(DRIVER_API + `update-group/${id}`).then(res => res.data)

const deleteGroup = (id) => customAxios.delete(DRIVER_API + `delete-vehicle/${id}`).then(res => res.data)

const createVehicle = (param) => customAxios.post(DRIVER_API + 'create-vehicle', param).then(res => res.data)

export default {
    createGroup,
    updateGroup,
    deleteGroup,
    createVehicle
}