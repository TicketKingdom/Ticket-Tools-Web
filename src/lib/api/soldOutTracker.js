import API from "../../utils/api";
let baseUrl = "http://127.0.0.1:8037/api";
import { datas, cron_status } from "../../store";

export const getDatas = async (site_type) => {
    try {
        let data = [];
        await API.get(baseUrl + `/soldout_tracker/${site_type}`).then(res => {
            datas.set(res.datas)
            cron_status.set(res.cron_status)
        });
        return data
    } catch (err) {
        console.log(err)
    }
}

export const getEtixById = async (id) => {
    try {
        let data;
        await API.get(baseUrl + `/soldout_tracker/etix/${id}`).then(res => {
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
        await API.post(baseUrl + '/soldout_tracker/etix', data).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const startEtix = async (id) => {
    try {
        let result;
        await API.post(baseUrl + '/soldout_tracker/etix/start', { id: id }).then(res => {
            result = res;
        })
        await getDatas()
        return result;
    } catch (err) {
        console.log(err)
    }
}

export const deleteEtix = async (id) => {
    try {
        let result;
        await API.delete(baseUrl + `/soldout_tracker/etix/${id}`).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const updateEtix = async (data) => {
    try {
        let result;
        await API.put(baseUrl + '/soldout_tracker/etix', data).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const startAllEtix = async () => {
    try {
        let result;
        await API.post(baseUrl + '/soldout_tracker/etix/startAll', {}).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const stopAllEtix = async () => {
    try {
        let result;
        await API.post(baseUrl + '/soldout_tracker/etix/stopAll', {}).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}