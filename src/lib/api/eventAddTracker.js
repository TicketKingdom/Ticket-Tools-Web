import API from "../../utils/api";
let baseUrl = "http://127.0.0.1:8038/api";
import { datas, cron_status, eventAddTrackerSidebar } from "../../store";

let eventAddTrackerSidebar_val = "ticketmaster";

eventAddTrackerSidebar.subscribe((value) => {
    eventAddTrackerSidebar_val = value
});

export const getDatas = async () => {
    try {
        let data = [];
        await API.get(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}`).then(res => {
            datas.set(res.datas)
            cron_status.set(res.cron_status)
        });
        return data
    } catch (err) {
        console.log(err)
    }
}

export const getDataById__eventAdd = async (id) => {
    try {
        let data;
        await API.get(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}/${id}`).then(res => {
            data = res
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export const newData_eventAdd = async (data) => {
    try {
        let result;
        await API.post(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}`, data).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const start_eventAdd = async (id) => {
    try {
        let result;
        await API.post(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}/start`, { id: id }).then(res => {
            result = res;
        })
        await getDatas()
        return result;
    } catch (err) {
        console.log(err)
    }
}

export const deleteData_eventAdd = async (id) => {
    try {
        let result;
        await API.delete(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}/${id}`).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}

export const updateData_eventAdd = async (data) => {
    try {
        let result;
        await API.put(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}`, data).then(res => {
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
        await API.post(baseUrl + `/eventAdd_tracker/${eventAddTrackerSidebar_val}/startAll`, {}).then(res => {
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
        await API.post(baseUrl + '/eventAdd_tracker/etix/stopAll', {}).then(res => {
            result = res
        })
        await getDatas()
        return result
    } catch (err) {
        console.log(err)
    }
}
