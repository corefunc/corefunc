// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.langQueueMicrotask = void 0;
// /**
//  * @name queueMicrotask
//  * @description Queues a microtask to be executed at a safe time prior to control returning to the event
//  * loop. The microtask is a short function which will run after the current task has completed its work and when
//  * there is no other code waiting to be run before control of the execution context is returned to the event loop.
//  * @param {Function} callback A function to be executed when the engine determines it is safe to call your code.
//  * @returns {void}
//  * @type Function
//  * @example
//  * await (async () => {
//  *   queueMicrotask(() => console.log("Processed later. Microtask completed."));
//  *   console.log("Processed first");
//  * })();
//  */
// let queueMicrotask;
// /*global globalThis*/
// if (typeof globalThis["queueMicrotask"] === "function") {
//   queueMicrotask = globalThis["queueMicrotask"];
// }
// else if ("process" in globalThis && globalThis["process"]["versions"] && globalThis["process"]["versions"]["node"]) {
//   queueMicrotask = globalThis["process"]["nextTick"];
// }
// else {
//   queueMicrotask = function (callback) {
//     Promise.resolve()
//       .then(callback)
//       .catch((error) => setTimeout(() => {
//         throw error;
//       }, 1));
//   };
// }
// exports.langQueueMicrotask = queueMicrotask;
