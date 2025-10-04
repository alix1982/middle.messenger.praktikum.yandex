import * as Handlebars from 'handlebars'
import { eventBusData } from '../..'

// Нельзя создавать экземпляр данного класса
// interface IProps {
//     heading: string,
//     textError: string,
//     name: string,
//     type: string,
//     value: string
// }
interface IMeta {
  tagName: string
  isAddContent: boolean
  props: string[]
  propsEvent: { [key: string]: () => void }
  propsEventBus: {}
  // renderContent: (...arg: string[])=> string
  //     value?: string[]
  // }
}

// interface IEventBusData {
//     onEvent?: (event: string, callback:()=>void) => void,
//     offEvent?: (event: string, callback:()=>void) => void,
//     emitEvent?: (event: string, ...args: []) => void,
//     listeners?: {}
// }
// class Block {
// const EVENTS = {
//   INIT: 'init',
//   FLOW_CDM: 'flow:component-did-mount',
//   FLOW_RENDER: 'flow:render',
//   FLOW_CDU: 'flow:component-did-update',
// }
// export function block(
// tagName: string, renderContent: (...arg: string[])=> string, ...arg: string[]
// ) {
export function block(
  tagName: string,
  props: [],
  propsEvent: {},
  propsEventBus = {},
  locationContent: 'beforeend' | 'afterbegin' = 'beforeend'
) {
  const meta: IMeta = {
    tagName,
    isAddContent:
      props.length > 0 && typeof (props[props.length - 1]) === 'boolean' ?
        props[props.length - 1] : false,
    props: props,
    propsEvent: propsEvent,
    propsEventBus: propsEventBus,
  }
  const elementFn = this.constructor;
  let element: HTMLElement;

  function _renderContentHandlebars(contentId: string, props: string[]) {

    contentId === '#app' && _removeEvents();
    // console.log(meta.isAddContent)
    // !meta.isAddContent && _removeEvents();

    const root = document.querySelector(contentId) as HTMLElement
    // console.log(root)
    // console.log(elementFn)
    // console.log(props)
    const template = Handlebars.compile(elementFn(...props))
    const result = template('')
    // contentId === '#app'
    !meta.isAddContent
      ? (root.innerHTML = result)
      : root.insertAdjacentHTML(locationContent, result)
    element = root.querySelector(`#${props[0]}`) as HTMLElement

    _addEventsBlock()
    eventBusData && _registerEvents()

    // console.log(eventBusData.listeners);
  }
  _renderContentHandlebars(meta.tagName, meta.props)

  function _addEventsBlock(): void {
    // console.log(element)
    const { propsEvent = {} } = meta

    Object.keys(propsEvent).forEach((eventName) => {
      if (element) {
        element.addEventListener(eventName as 'click' | 'change' | 'input', propsEvent[eventName])
        // element.setAttribute('data-event', eventName)
      }
    })
  }

  function _registerEvents() {
    let elId = element?.id;
    // console.log(elId)
    const { propsEvent = {} } = meta;
    // eventBusBlock.onEvent(EVENTS.INIT, init.bind(this));
    // console.log(eventBusData.listeners);

    Object.keys(propsEvent).forEach((eventName) => {
      eventBusData.onEvent(eventName, propsEvent[eventName], elId)
      // if (element) {
      //     element.addEventListener(
      // eventName as ('click' | 'change' | "input"), propsEvent[eventName]
      // );
      // }
    })
    // eventBus();
    // const eventBusBlock = eventBus();
    // eventBusBlock.onEvent(EVENTS.INIT, init.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_CDM, _componentDidMount.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_RENDER, _render.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_RENDER, _render.bind(this));
  }

  function _removeEvents() {
    const listener = eventBusData.listeners
    for (let key in listener) {
      listener[key].forEach((event) => {
        const eventElement = document.querySelector(`#${event.elementId}`) as HTMLElement
        eventElement.removeEventListener(
          key as 'click' | 'change' | 'input', event.listenerElement
        );
        eventBusData.offEvent(key, event.listenerElement)
      })
    }
  }
}
