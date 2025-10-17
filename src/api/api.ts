enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
type IData = {[key: string]: number[] | string | number}

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

// Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
// На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
// На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3

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

        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
          xhr.send(JSON.stringify(data))
        }
    })
  }
}
