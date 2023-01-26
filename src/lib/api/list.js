import API from "../../utils/api";
let baseUrl = "http://127.0.0.1:8037/api";

export const getLists = async () => {
    console.log("get db datas")
    // try {
    //     let data;
    //     await API.get(baseUrl + '/etix').then(res => {
    //         etixs.set(res)
    //     });
    //     return data
    // } catch (err) {
    //     console.log(err)
    // }
}

export const startList = async () => {
    console.log("start data")
    try {
        let result;
        await API.post(baseUrl + '/list').then(res => {
            result = res;
        })
        await getLists()
        return result;
    } catch (err) {
        console.log(err)
    }
}