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
  return new Promise((resolve, reject) => {
    new HTTPTransport()
      .put(`${BASE_URL}/user/profile/avatar`, {data: dataRequest })
        .then((res)=> {
          res.status === 200 &&
            localStorage.setItem('dataUser', res.response);
          resolve(res.status);
        })
        .catch((err)=>{
          reject(err)
          console.log(err)
        })
  })
}

// export function apiUserLoadAvatar (dataRequest: {}) {
//   console.log('getUserAvatar');
//   return new Promise((resolve,reject) => {
//     new HTTPTransport()
//       .get(`${BASE_URL}/resources/${dataRequest}`)
//         .then((res)=> {
//           // console.log(res.status)
//           // resolve(
// //   BASE_URL + '/resources/' + JSON.parse(localStorage.getItem('dataUser') as string).avatar
//           // )
//           resolve(res.response)
//           // res.status === 200 &&
//           //   localStorage.setItem('avatar', res.response);
//         })
//         .catch((err)=>{
//           reject(avatarDefault)
//           console.log(err)
//         })

//   })
// }
