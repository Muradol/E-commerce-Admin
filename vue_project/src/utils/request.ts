import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "../store/modules/user";
//创建axios实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 500000000
})
//请求拦截器
request.interceptors.request.use(config => {
    let userStore = useUserStore();
    if(userStore.token){
        config.headers.token = userStore.token;
    }
    return config;
});
//响应拦截器
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    //处理网络错误
    let message = '';
    const status = error.response.status;
    switch (status) {
        case 401:
            message = "token过期";
            break;
        case 403:
            message = '无权访问';
            break;
        case 404:
            message = "请求地址错误";
            break;
        case 500:
            message = "服务器出现问题";
            break;
        default:
            message = "无网络";

    }
    ElMessage({
        type: 'error',
        message,
    })
    return Promise.reject(error);
});
export default request;