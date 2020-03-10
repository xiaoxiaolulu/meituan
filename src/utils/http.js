import axios from "axios"
import auth from "./auth"
import router from "../routes";

const BASE_URL = 'http://127.0.0.1:8000';

class Http {
    constructor() {
        this.http = axios.create({
            baseURL: BASE_URL,
            timeout: 1000
        });

        // 请求之前的拦截器，用来设置JWT
        this.http.interceptors.request.use(config => {
            const token = auth.token;
            if(token){
                config.headers.common.Authorization = "JWT " + token
            }
            return config
        });

        // 响应之后的拦截器
        this.http.interceptors.response.use(null, err => {
            if (err.response.status === 403){
                auth.clearUserToken();
                router.replace('/login')
            }
        })
    }

    getSmsCode(telephone){
        const url = "/smscode?tel=" + telephone;
        return this.http.get(url)
    }

    login(params){
        const url = "/login";
        return this.http.post(url,params)
    }
}

export default new Http()