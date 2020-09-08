import JsonP from 'jsonp'
import {func} from "prop-types";

export default class Axios {
    static jsonp(options){
        return  new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function (err,responese) {

            })
        })
    }
}
