import { BASE_URL } from "../utils/constant";
import { HTTPTransport } from "./api";

export function apiUserUpdate (dataRequest:{}) {
  console.log('putUserData')
  new HTTPTransport()
    .put(`${BASE_URL}/user/profile`, {data: dataRequest})
      .then((res)=> {
        res.status === 200 &&
          localStorage.setItem('dataUser', res.response);
      })
      .catch((err)=>{
        console.log(err)
      })
}

export function apiUserUpdatePass (dataRequest:{}) {
  console.log('putUserPassword')
  new HTTPTransport()
    .put(`${BASE_URL}/user/password`, {data: dataRequest})
      .then((res)=> {
        console.log('passwordUpdateStatus:' + res.status);

        // res.status === 200 &&
        //   localStorage.setItem('dataUser', res.response);
      })
      .catch((err)=>{
        console.log(err)
      })
}

export function apiUserUpdateAvatar (dataRequest: {}) {
  console.log('putUserAvatar');
  // const file = dataRequest.data as FormData
  new HTTPTransport()
    .put(`${BASE_URL}/user/profile/avatar`, {data: dataRequest })
      .then((res)=> {
        res.status === 200 &&
          localStorage.setItem('dataUser', res.response);
      })
      .catch((err)=>{
        console.log(err)
      })
}
