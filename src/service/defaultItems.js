import axios from "axios";
import config from '../config.js'


export function getItemsData(){
    return axios.get(config.BACK_IP + `posts`)
    .then(response =>response)
    .catch(error => console.log(error));
}