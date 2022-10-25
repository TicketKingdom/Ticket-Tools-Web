import API from "../../utils/api";
let baseUrl = "http://127.0.0.1:8037/api";
import { etixs } from "../../store";

export const getEtixs = async () => {
    try {
        let data;
        await API.get(baseUrl + '/etix').then(res => {
            etixs.set(res)
        });
        return data
    } catch (err) {
        console.log(err)
    }
}

export const getEtixById = async (id) => {
    try {
        let data;
        await API.get(baseUrl + `/etix/${id}`).then(res => {
            data = res
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export const newEtix = async (data) => {
    try {
        let result;
        await API.post(baseUrl + '/etix', data).then(res => {
            result = res
        })
        await getEtixs()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const startEtix = async (id) => {
    try {
        let result;
        await API.post(baseUrl + '/etix/start', { id: id }).then(res => {
            result = res;
        })
        await getEtixs()
        return result;
    } catch (err) {
        console.log(err)
    }
}

export const deleteEtix = async (id) => {
    try {
        let result;
        await API.delete(baseUrl + `/etix/${id}`).then(res => {
            result = res
        })
        await getEtixs()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const updateEtix = async (data) => {
    try {
        let result;
        await API.put(baseUrl + '/etix', data).then(res => {
            result = res
        })
        await getEtixs()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const startAllEtix = async () => {
    try {
        let result;
        await API.post(baseUrl + '/etix/startAll', {}).then(res => {
            result = res
        })
        return result
    } catch (err) {
        console.log(err)
    }
}

export const stopAllEtix = async () => {
    try {
        let result;
        await API.post(baseUrl + '/etix/stopAll', {}).then(res => {
            result = res
        })
        return result
    } catch (err) {
        console.log(err)
    }
}