import {errRout404} from "./errRout404";

export function errorRout404Html() {
  errRout404.prototype.block('#app', [], {})
}
