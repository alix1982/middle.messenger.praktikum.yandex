enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
type IData = {[key: string]: number[] | string | number}
// type IData = {[key: string]: string}

type Options = {
  method: METHOD
  withCredentials?: boolean
  credentials?: string
  mode?: string
  data?: IData | FormData
  // title?: string
  tries?: number
  users?: number[],
  chatId?: number
}
// const METHODS = {
//     GET: 'GET',
//     POST: 'POST',
//     PUT: 'PUT',
//     DELETE: 'DELETE',
// };

// Тип Omit принимает два аргумента: первый — тип, второй — строка
// и удаляет из первого типа ключ, переданный вторым аргументом
type OptionsWithoutMethod = Omit<Options, 'method'>
type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<XMLHttpRequest>
// class HTTPTransport {
//   get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
//     return this.request(url, {...options, method: METHOD.GET});
//   };

//   request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
//     const {method, data} = options;

//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(method, url);

//       xhr.onload = function() {
//         resolve(xhr);
//       };

//       xhr.onabort = reject;
//       xhr.onerror = reject;
//       xhr.ontimeout = reject;

//       if (method === METHOD.GET || !data) {
//         xhr.send();
//       } else {
//         xhr.send(data);
//       }
//     });
//   };
// }

// let countFetch = 0;
// function fetchWithRetry(url, options) {
// 		const countFetcFinal = options?.tries ? options.tries : 1;
// 		const fetchRes = new HTTPTransport(url, options);

// 		return fetchRes
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((response) => {
// 				return response
// 			})
// 			.catch((err) => {
// 				countFetch ++;
// 				if (countFetch >= countFetcFinal) {
// 					return err
// 				}
// 				return fetchWithRetry(url, options)
// 			})
// }

// function fetchWithRetry(url:string, options: Options = {method: METHOD.GET }) {
//   const {tries = 1} = options;

//     function onError(err){
//         const triesLeft = tries - 1;
//         if (!triesLeft){
//             throw err;
//         }

//         return fetchWithRetry(url, {...options, tries: triesLeft});
//     }

//     return fetch(url, options).catch(onError);
// }

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
// function queryStringify(data: IData, url: string) {
//   let str = url + '?'
//   if (data) {
//     for (const i in data) {
//       str = str + i + '=' + data[i] + '&'
//     }
//     // console.log(str);
//     str = str.slice(0, -1)
//   }
//   return str
// }

export class HTTPTransport {

  get: HTTPMethod = (url, options = {}) => {
    // return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    return this.request(url, { ...options, method: METHOD.GET })
  }
  post: HTTPMethod = (url, options = {}) => {
    // return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    return this.request(url, { ...options, method: METHOD.POST })
  }
  put: HTTPMethod = (url: string, options: OptionsWithoutMethod = {}) => {
    // return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    return this.request(url, { ...options, method: METHOD.PUT })
  }
  delete: HTTPMethod = (url, options = {}) => {
    // return this.request(url, {...options, method: METHOD.GET}, options.timeout);
    return this.request(url, { ...options, method: METHOD.DELETE })
  }
  // PUT, POST, DELETE

  // options:
  // headers — obj
  // data — obj
  request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    // const {method, headers, data} = options;
    const { method, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      function err() {
        xhr.onabort = reject
        xhr.onerror = reject
        xhr.ontimeout = reject
      }

      // if (method === METHOD.GET) {
      //   if (data) {
      //     url = queryStringify(data, url)
      //   }
      //   // data ? url = queryStringify(data, url) : xhr.send(data);
      //   xhr.open(method, url)
      //   xhr.onload = function () {
      //     resolve(xhr)
      //   }
      //   err()
      //   xhr.send()

      //   xhr.send()
      // } else {
        xhr.open(method, url)
        xhr.onload = function () {
          resolve(xhr)
        }

        err();
        xhr.withCredentials = true;


        // разкомментить
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data')

        // const fileInput = document.querySelector('input[type=file]');
        // // console.log(fileInput.files[0])
        // const file = fileInput.files[0];
        // // console.log(file)
        // const formdata = new FormData();
        // formdata.append('avatar', file);
        // xhr.send(formdata);


        // xhr.setRequestHeader('Accept', 'application/json')
        // xhr.send(new FormData(data) as FormData);
        // if (data?.type) {

        //   console.log('1')
        //   console.log(data)
        //   xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=utf-8')
        //   xhr.send(data as File);
        // } else {
        //   console.log('2')
          // console.log(data)

          // закомментить после входа
          xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
          xhr.send(JSON.stringify(data))
        // }
        // xhr.send(data);
      // }
    })
  }
}
