import API from "../../utils/api";
let baseUrl = "http://127.0.0.1:8037/api";

export const getEtixs = async () => {
    try {
        let data;
        await API.get(baseUrl + '/etix/getAll').then(res=>{
            data = res
        });
        return data
    } catch (err) {
        console.log(err)
    }
}