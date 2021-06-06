import { USER_API } from "../constants/api";
import customAxios from "./requests";

const createCoordinate = (param, config) => customAxios.post(USER_API + 'create-coordinate', param, config).then(res => res.data)

const group = (id, config) => customAxios.get(USER_API + `${id}/group`, config).then(res => res.data)

const coordinate = (id, config) => customAxios.get(USER_API + `${id}/coordinate`, config).then(res => res.data)

const search = (config) => customAxios.get(USER_API + 'search', config).then(res => res.data)

const user = (username, config) => customAxios.get(USER_API + `?username=${username}`, config).then(res => res.data)

const userId = (userId, config) => customAxios.get(USER_API + `${userId}`, config).then(res => res.data)

const updateUser = (pass, params, config) => customAxios.put(USER_API + `update?password=${pass}`, params, config).then(res => res.data)

const deleteUsers = (id, config) => customAxios.delete(USER_API + `delete-user/${id}`, config).then(res => res.data)

const allUsers = (config) => customAxios.get(USER_API + '/allusers', config).then(res => res.data)

const vehicle = (id, config) => customAxios.get(USER_API + `${id}/vehicle`, config).then(res => res.data)

const updateVehicle = (vehicleid, params, config) => customAxios.put(USER_API + `update-vehicle/${vehicleid}`, params, config).then(res => res.data)

const deleteVehicle = (id, config) => customAxios.delete(USER_API + `delete-vehicle/${id}`, config).then(res => res.data)

const allGroups = (config) => customAxios.get(USER_API + `allgroups`, config).then(res => res.data)

const allPassengers = (config) => customAxios.get(USER_API + `allpassengers`, config).then(res => res.data)

const inGroup = (groupid, config) => customAxios.get(USER_API + `ingroup/${groupid}`, config).then(res => res.data)

const allDrivers = (config) => customAxios.get(USER_API + `alldrivers`, config).then(res => res.data)

const allVehicles = (config) => customAxios.get(USER_API + `allvehicles`, config).then(res => res.data)

const leaveGroup = (groupid, config) => customAxios.get(USER_API + `leave-group/${groupid}`, config).then(res => res.data)

const joinGroup = (groupid, config) => customAxios.get(USER_API + `join-group/${groupid}`, config)

const updateCoordinate = (coordinateid, params, config) => customAxios.put(USER_API + `update-coordinate/${coordinateid}`, params, config).then(res => res.data)

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
    allVehicles,
    updateUser,
    updateCoordinate,
    coordinate,
    inGroup,
    userId,
    leaveGroup,
    joinGroup
}



