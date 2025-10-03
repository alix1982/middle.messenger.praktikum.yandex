import { buttonLink } from "../../modules/buttonLink/buttonLink";
import { routerBack } from "../../utils/routing/router";
import {errRout404} from "./errRout404";

export function errorRout404Html() {
  const propsButton404Link = ['backButton404', 'Назад', true]
  const propsEventButton404Link = {
    click: routerBack,
  }

  errRout404.prototype.block('#app', [], {})
  buttonLink.prototype.block('.errRout404__main', propsButton404Link, propsEventButton404Link)
}
