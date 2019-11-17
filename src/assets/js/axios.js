import axios from 'axios'

export default function request(config){
    return new Promise((resolve,reject)=>{
        let instance = axios.create({
            baseURL:'http://0.0.0.0:8080',
            timeout:5000
            //headers:{}
        })
        instance(config).then(res => {
            resolve(res)
        })
        .catch(res => {
            reject(res)
        })
    })
}

/* axios({
    method:"POST",
    url:'',
    data:{

    }
}) */