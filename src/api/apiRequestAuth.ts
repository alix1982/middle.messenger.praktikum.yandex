import { BASE_URL } from "../utils/constant";
import { navigate } from "../utils/routing/navigate";
import { HTTPTransport } from "./api";

export async function logout() {
  // return new Promise(() => {
    localStorage.removeItem('auth');
    localStorage.removeItem('dataUser');
    await apiAuthLogout();
  // })
};

export async function apiAuthRegistr (dataRequest:{}) {
  let countRequest = 0;
  function registr(dataRequest:{}) {
    // console.log(countRequest)
    // return new Promise(() => {
      new HTTPTransport()
        .post(`${BASE_URL}/auth/signup`, {data: dataRequest})
          .then(async(res)=> {
            // console.log(countRequest)
            // console.log('0')
            countRequest ++;
            if (res.status === 200) {
              // console.log('1if200')
              apiAuthInfo(true);
            } else {
              // console.log('2else')
              await logout();
              throw new Error('error registr')
            }
            return res.status
          })
          .catch((err)=>{
            // console.log('err')
            countRequest < 2 && registr(dataRequest);
            console.log(err)
          })


    // })
  }
  registr(dataRequest)
}

export async function apiAuthLogin (dataRequest:{}) {
  let countRequest = 0;
  function login(dataRequest:{}) {
    new HTTPTransport()
      .post(`${BASE_URL}/auth/signin`, {data: dataRequest})
        .then(async(res)=> {
          countRequest ++;
          if (res.status === 200) {
            apiAuthInfo(true)
          } else {
            await logout();
            throw new Error('error login')
          }
        })
        .catch((err)=>{
          countRequest < 2 && login(dataRequest);
          console.log(err)
        })
  }
  login(dataRequest)
}

export function apiAuthInfo (isRedirect = false) {
  console.log('user');
  return new Promise(() => {
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
  })
}

export function apiAuthLogout () {
  return new Promise((resolve) => {
    new HTTPTransport()
      .post(`${BASE_URL}/auth/logout`)
        .then((res)=> {
          console.log('logoutStatus:' + res.status);
          resolve(res);
        })
        .catch((err)=>{
          console.log(err)
        })

  })
}
