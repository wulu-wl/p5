import qs from "qs"
import axios from "axios"
//因为要验证信息，所以我们每次请求都要携带uid和token
// axios.defaults.headers.common["Authorization"]=JSON.stringify({
//     token:sessionStorage.token,
//     uid:sessionStorage.uid
// })
//请求拦截器
axios.interceptors.request.use((config)=>{
    config.headers.Authorization=JSON.stringify({
        token:sessionStorage.token,
        uid:sessionStorage.uid
    })
    return config
})
//响应拦截器
axios.interceptors.response.use(data=>{
    return data;
},err=>{
    let str=err.toString();
    if(str.indexOf("401")>=0){
        window.location.href="http://localhost:3000/login"
    }else if(str.indexOf("403")>=0){
        window.history.back(-1)
    }
})
//客户端接口
export let login=(data)=>{
    return axios({
        method:"post",
        url:"/api/login",
        data:qs.stringify(data)
    })
}
export let freedom=(data)=>{
    return axios({
        method:"get",
        url:"/admin/freedom",
        params:data
    })
}

export let option=(data)=>{
    return axios({
        method:"get",
        url:"/admin/option"
    })
}

