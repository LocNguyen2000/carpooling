import { USER_API } from "../constants/api";
import customAxios from "./requests";

const createCoordinate = (param) => customAxios.post(USER_API + 'create-coordinate', param).then(res => res.data)

const group = (id) => customAxios.get(USER_API + `group/${id}`).then(res => res.data)

const search = () => customAxios.get(USER_API + 'search').then(res => res.data)

const user = (username) => customAxios.get(USER_API + `?username=${username}`).then(res => res.data)

const deleteUsers = (id) => customAxios.delete(USER_API + `delete-user/${id}`).then(res => res.data)

const allUsers = () => customAxios.get(USER_API + '/allusers').then(res => res.data)

const vehicle = (id) => customAxios.get(USER_API + `vehicle/${id}`).then(res => res.data)

const updateVehicle = (vehicleid) => customAxios.put(USER_API + `update-vehicle/${vehicleid}`).then(res => res.data)

const deleteVehicle = (id) => customAxios.delete(USER_API + `delete-vehicle/${id}`).then(res => res.data)

const allGroups = () => customAxios.get(USER_API + `allgroups`).then(res => res.data)

const allPassengers = () => customAxios.get(USER_API + `allpassengers`).then(res => res.data)

const allDrivers = () => customAxios.get(USER_API + `alldrivers`).then(res => res.data)

const allVehicles = () => customAxios.get(USER_API + `allvehicles`).then(res => res.data)

export default {
    createCoordinate,
    group,
    search,
    user,
    deleteUsers,
    allUsers,
    vehicle,
    updateVehicle,
    deleteVehicle,
    allGroups,
    allPassengers,
    allDrivers,
    allVehicles
}



