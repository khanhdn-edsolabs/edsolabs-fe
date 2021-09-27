import axiosClient from "./axiosClient";

const listStudent = {
    getAll(params) {
        const url = "/students";
        return axiosClient.get(url, {params})
    }
}

export default listStudent;