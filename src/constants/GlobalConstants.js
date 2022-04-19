import axios from "axios";

export const baseUrl = "https://api-pub.bitfinex.com/v2/";

export function getApiData(pathParams,queryParams){
    return axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
}