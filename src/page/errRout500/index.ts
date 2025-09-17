import {errRout500} from "./errRout500";

export function errorRout500Html() {
  errRout500.prototype.block('#app', [], {})
}
