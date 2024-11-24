import API from "../../utils/api";
let baseUrl = "http://192.168.1.123:8038/api";
import { lists } from "../../store";

export const getLists = async () => {
    console.log("get db datas")
    try {
        let data;
        await API.get(baseUrl + '/list').then(res => {
            lists.set(res)
        });
        return data
    } catch (err) {
        console.log(err)
    }
}

export const startList = async (date) => {
    console.log("start data", date)
    try {
        let result;
        await API.post(baseUrl + '/list', { date: date }).then(res => {
            result = res;
        })
        await getLists()
        return result;
    } catch (err) {
        console.log(err)
    }
}
