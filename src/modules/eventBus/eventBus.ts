export function eventBus() {
    interface IListeners {
        [key: string]: {elementId: string | undefined, listenerElement: (()=>void)}[];
        // [key: string]: (()=>void)[];

        // callback?: ()=>void
    }
    // let _event: string;
    // let _callback;
    // let _args;
    const listeners:IListeners = {};

    function onEvent(event: string, callback: ()=> void, elId: string | undefined = undefined) {
        // const _callback = () => callback
        // _event = event
        // console.log(event)
        if (!(listeners[event])) {
            listeners[event] = [];
        }
        listeners[event].length === 0 &&
          listeners[event].push({elementId: elId, listenerElement: callback});
        listeners[event].find((item) => item.elementId === elId) === undefined &&
          listeners[event].push({elementId: elId, listenerElement: callback});
        // listeners[event].push({elementId: elId, listenerElement: callback});
    };
    function offEvent(event: string, callback:()=>void) {
        if (!listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        listeners[event] = listeners[event].filter(
            listener => listener.listenerElement !== callback
        );
        listeners[event].length === 0 && delete listeners[event];
    };
    function emitEvent(event: string, ...args: []) {
        // let _event =;
        if (!listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        listeners[event].forEach((listener) => {
            listener.listenerElement(...args);
        });
    }
    // console.log(listeners)
    return {onEvent, offEvent, emitEvent, listeners}
}



// export function createCounter(init) {
//     let _init = init;
//     let isReset = false;
//     let initFirst;
//     if (!isReset) {
//         initFirst = init;
//         isReset = true;
//     };
//     const increment = () => {
//         // console.log(_init)
//         _init ++
//         createCounter(_init)
//         return _init;
//     };
//     const decrement = () => {
//         _init --
//         createCounter(_init)
//         return _init;
//     };
//     const reset = () => {
//         _init = initFirst;
//         createCounter(_init)
//         return _init;
//     };
//     return {increment, decrement, reset}
// };

// const counter = createCounter(100)

// console.log(counter.decrement())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.increment())
// console.log(counter.increment())
// class EventBus {
//     constructor() {
//         this.listeners = {};
//     }

//     on(event, callback) {
//         if (!this.listeners[event]) {
//             this.listeners[event] = [];
//         }

//         this.listeners[event].push(callback);
//   }

//     off(event, callback) {
//         if (!this.listeners[event]) {
//       throw new Error(`Нет события: ${event}`);
//     }

//     this.listeners[event] = this.listeners[event].filter(
//       listener => listener !== callback
//     );
//   }

//     emit(event, ...args) {
//         if (!this.listeners[event]) {
//                 throw new Error(`Нет события: ${event}`);
//         }

//         this.listeners[event].forEach(listener => {
//             listener(...args);
//         });
//     }
// }
