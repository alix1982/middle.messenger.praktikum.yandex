import { BASE_URL } from "../utils/constant";
import { navigate } from "../utils/routing/navigate";
import { HTTPTransport } from "./api";

export function logout() {
  localStorage.removeItem('auth');
  localStorage.removeItem('dataUser');
  apiAuthLogout();
};

export function apiAuthRegistr (dataRequest:{}) {
  new HTTPTransport()
    .post(`${BASE_URL}/auth/signup`, {data: dataRequest})
      .then((res)=> {
        if (res.status === 200) {
          apiAuthInfo(true);
        } else {
          logout();
          throw new Error('error registr')
        }
      })
      .catch((err)=>{
          console.log(err)
      })
}

export function apiAuthLogin (dataRequest:{}) {
  new HTTPTransport()
    .post(`${BASE_URL}/auth/signin`, {data: dataRequest})
      .then((res)=> {
        if (res.status === 200) {
            apiAuthInfo(true)
        } else {
          logout();
          throw new Error('error login')
        }
      })
      .catch((err)=>{
        console.log(err)
      })
}

export function apiAuthInfo (isRedirect = false) {
  console.log('user');
  new HTTPTransport()
    .get(`${BASE_URL}/auth/user`)
      .then((res)=> {
        if (res.status === 200) {
          localStorage.setItem('dataUser', res.response);
          localStorage.setItem('auth', 'Aberto');
        } else {
          logout();
          throw new Error('error request user')
        }
      })
      .then(() => {
        isRedirect && navigate('messenger');
      })
      .catch((err)=>{
        console.log(err)
      })
}

export function apiAuthLogout () {
  new HTTPTransport()
    .post(`${BASE_URL}/auth/logout`)
      .then((res)=> {
        console.log('logoutStatus:' + res.status);
      })
      .catch((err)=>{
        console.log(err)
      })
}
