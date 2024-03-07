import API from "../../utils/api";
let baseUrl = "http://192.168.1.123:8037/api";
import { datas, cron_status, souldoutTrackerSidebar } from "../../store";

let souldoutTrackerSidebar_val = "etix";

souldoutTrackerSidebar.subscribe((value) => {
	souldoutTrackerSidebar_val = value
}); 

export const getDatas = async () => {
    try {
        let data = [];
        await API.get(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}`).then(res => {
            datas.set(res.datas)
            cron_status.set(res.cron_status)
        });
        return data
    } catch (err) {
        console.log(err)
    }
}

export const getDataById = async (id) => {
    try {
        let data;
        await API.get(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}/${id}`).then(res => {
            data = res
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export const newData = async (data) => {
    try {
        let result;
        await API.post(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}`, data).then(res => {
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
        await API.post(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}/start`, { id: id }).then(res => {
            result = res;
        })
        await getDatas()
        return result;
    } catch (err) {
        console.log(err)
    }
}

export const deleteData = async (id) => {
    try {
        let result;
        await API.delete(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}/${id}`).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const updateData = async (data) => {
    try {
        let result;
        await API.put(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}`, data).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const startAllDatas = async () => {
    try {
        let result;
        await API.post(baseUrl + `/soldout_tracker/${souldoutTrackerSidebar_val}/startAll`, {}).then(res => {
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
