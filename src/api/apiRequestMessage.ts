import { BASE_URL } from "../utils/constant";
import { HTTPTransport } from "./api";

export function apiMessageChats () {
  // console.log('getMessage');
  return new Promise((resolve) => {
    new HTTPTransport()
      .get(`${BASE_URL}/chats`)
        .then((res) => {
          if (res.status === 200) {
            resolve(JSON.parse(res.response))
          } else {
            throw new Error('error request message')
          }
        })
        .catch((err)=>{
          console.log(err)
        })
  })
}

export function apiMessageCreateChat (dataRequest:{}) {
  // console.log('postCreateChat')
  return new Promise((resolve) => {
    new HTTPTransport()
      .post(`${BASE_URL}/chats`, {data: dataRequest})
        .then((res)=> {
          resolve(res.response)
          // res.status === 200 &&
          //   localStorage.setItem('dataUser', res.response);
        })
        .catch((err)=>{
          console.log(err)
        })
  })
}
export function apiMessageAddUser (idUser:number, idChat: number) {
  // console.log('putAddUser')

  return new Promise((resolve) => {
    new HTTPTransport()
      .put(`${BASE_URL}/chats/users`, {data: {users: [idUser], chatId: idChat}})
        .then((res)=> {
          resolve(JSON.parse(res.response))
          // res.status === 200 &&
          //   localStorage.setItem('dataUser', res.response);
        })
        .catch((err)=>{
          console.log(err)
        })
  })
}
export function apiMessageGetToken (id:number) {
  // console.log('postCreateChat')
  return new Promise((resolve) => {
    new HTTPTransport()
      .post(`${BASE_URL}/chats/token/${id}`)
        .then((res)=> {
          resolve(JSON.parse(res.response).token)
          // res.status === 200 &&
          //   localStorage.setItem('dataUser', res.response);
        })
        .catch((err)=>{
          console.log(err)
        })
  })
}
