import { DRIVER_API } from "../constants/api";
import customAxios from "./requests";

const createGroup = (param, config) => customAxios.post(DRIVER_API + 'create-group', param, config).then(res => res.data)

const updateGroup = (id, config) => customAxios.put(DRIVER_API + `update-group/${id}`, config).then(res => res.data)

const deleteGroup = (id, config) => customAxios.delete(DRIVER_API + `delete-group/${id}`, config)

const createVehicle = (param, config) => customAxios.post(DRIVER_API + 'create-vehicle', param, config).then(res => res.data)

export default {
    createGroup,
    updateGroup,
    deleteGroup,
    createVehicle
}