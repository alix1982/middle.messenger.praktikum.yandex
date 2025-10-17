import { buttonLink } from "../../modules/buttonLink/buttonLink";
import { routerBack } from "../../utils/routing/router";
import {errRout500} from "./errRout500";

export function errorRout500Html() {
  const propsButton500Link = ['backButton404', 'Назад', true]
  const propsEventButton500Link = {
    click: routerBack,
  }
  errRout500.prototype.block('#app', [], {})
  buttonLink.prototype.block('.errRout500__main', propsButton500Link, propsEventButton500Link)
}
