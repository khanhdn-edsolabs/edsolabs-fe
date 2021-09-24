import axiosClient from "./axiosClient";

const listUser = {
    getAll(param) {
        const url = "/users";
        return axiosClient.get(url, {param});
    }
}

export default listUser;