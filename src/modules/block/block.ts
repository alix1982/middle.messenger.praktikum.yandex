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
// export function block(tagName: string, renderContent: (...arg: string[])=> string, ...arg: string[]) {
export function block(
  tagName: string,
  props: string[],
  propsEvent: {},
  propsEventBus = {},
  locationContent: 'beforeend' | 'afterbegin' = 'beforeend'
) {
  const meta: IMeta = {
    tagName,
    props: props,
    propsEvent: propsEvent,
    propsEventBus: propsEventBus,
  }
  // console.log(tagName)
  const elementFn = this.constructor
  let element: HTMLElement

  function _renderContentHandlebars(contentId: string, props: string[]) {
    // console.log(contentId);
    // console.log(eventBusData)
    const root = document.querySelector(contentId) as HTMLElement
    // console.log(root)
    // console.log(elementFn)
    // console.log(props)
    const template = Handlebars.compile(elementFn(...props))
    const result = template('')
    contentId === '#app'
      ? (root.innerHTML = result)
      : root.insertAdjacentHTML(locationContent, result)
    element = root.querySelector(`#${props[0]}`) as HTMLElement

    _addEventsBlock()
    eventBusData && _registerEvents()
  }
  _renderContentHandlebars(meta.tagName, meta.props)

  function _addEventsBlock(): void {
    // console.log(element)
    const { propsEvent = {} } = meta

    Object.keys(propsEvent).forEach((eventName) => {
      if (element) {
        element.addEventListener(eventName as 'click' | 'change' | 'input', propsEvent[eventName])
      }
    })
  }

  function _registerEvents() {
    // console.log(eventBusData);
    // console.log(x)
    const { propsEvent = {} } = meta
    // eventBusBlock.onEvent(EVENTS.INIT, init.bind(this));
    Object.keys(propsEvent).forEach((eventName) => {
      eventBusData.onEvent(eventName, propsEvent[eventName])
      // if (element) {
      //     element.addEventListener(eventName as ('click' | 'change' | "input"), propsEvent[eventName]);
      // }
    })
    // console.log(eventBusData.listeners)
    // eventBus();
    // const eventBusBlock = eventBus();
    // eventBusBlock.onEvent(EVENTS.INIT, init.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_CDM, _componentDidMount.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_RENDER, _render.bind(this));
    // eventBusBlock.onEvent(EVENTS.FLOW_RENDER, _render.bind(this));
  }
  // _addEventsBlock()
  // _registerEvents()

  // ----------------------------------------------------------------

  // function _createResources() {
  //     const { tagName } = this._meta;
  //     this._element = _createDocumentElement(tagName);
  // }

  // function init() {
  //     _createResources();
  //     // eventBusBlock.emitEvent(EVENTS.FLOW_RENDER);
  // }

  // function _componentDidMount() {
  //     componentDidMount();
  // }

  // function componentDidMount() {}

  // function dispatchComponentDidMount() {
  //     this._eventBus().emit(EVENTS.FLOW_CDM);
  // }

  // function _componentDidUpdate(oldProps: {}, newProps:{}) {
  //     // ...
  // }

  // function componentDidUpdate(oldProps: {}, newProps: {}) {
  //     return true;
  // }

  // const setProps = (nextProps: {}) => {
  //     if (!nextProps) {
  //     return;
  //     }

  //     Object.assign(this.props, nextProps);
  // };

  // function getElement() {
  //     return this._element;
  // }

  // function _render() {
  //     const block = render();
  //     // Это небезопасный метод для упрощения логики
  //     // Используйте шаблонизатор из npm или напишите свой безопасный
  //     // Нужно компилировать не в строку (или делать это правильно),
  //     // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
  //     this._element.innerHTML = block;
  // }

  // // Переопределяется пользователем. Необходимо вернуть разметку
  // function render() {}

  // function getContent() {
  //     return this.element;
  // }

  // function _makePropsProxy(props:{}) {
  //     // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
  //     const self = this;

  //     return new Proxy(props, {
  //         get(target, prop) {
  //             const value = target[prop];
  //             return typeof value === 'function' ? value.bind(target) : value;
  //         },
  //         set(target, prop, value) {
  //             const oldTarget = { ...target };
  //             target[prop] = value;
  //             self.eventBus().emit(EVENTS.FLOW_CDU, oldTarget, target);
  //             return true;
  //         },
  //         deleteProperty() {
  //             throw new Error('нет доступа');
  //         },
  //     });
  // }

  // function _createDocumentElement(tagName:string) {
  //     // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
  //     return document.createElement(tagName);
  // }

  //   show() {
  //     this.getContent().style.display = "block";
  //   }

  //   hide() {
  //     this.getContent().style.display = "none";
  //   }
  // return {renderContentHandlebars}
}

