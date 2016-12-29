import axios from 'axios';

const API_PATH = 'http://127.0.0.1:8887/';

export function post(serviceName="",data){
  return axios({
    method:'POST',
    url:API_PATH+serviceName,
    headers:{
      'Content-Type':'application/json'
    },
    data:data
  });
}
  export function get(serviceName=""){
    return axios({
      method:"GET",
      url:API_PATH+serviceName,
      headers:{
        'Content-Type':'application/json'
      }
    })
  }
