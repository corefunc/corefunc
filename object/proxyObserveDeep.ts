import getGlobal from "system.global";

const global = getGlobal();

/**
 * @example import fnProxyObserveDeep from '@selfserve/utility/object/proxyObserveDeep';
 */
let proxyObserveDeep = () => {};

if ("Proxy" in global) {
  proxyObserveDeep = function fnProxyObserveDeep(aTarget) {
    const target = aTarget;
    const handler = {
      get(getTarget, key) {
        // console.log({ operation: 'get', target, key, });
        return getTarget[key];
      },
      set(setTarget, key, value) {
        // console.log({ operation: 'set', target, key, value});
        if (value && typeof value === "object") {
          // value.___path = key;
          // value.___parent = setTarget;
          setTarget[key] = proxyObserveDeep(value);
        } else {
          setTarget[key] = value;
        }
        return true;
      },
      deleteProperty(deleteTarget, key) {
        // console.log({ operation: 'delete', target, key, });
        delete deleteTarget[key];
        return true;
      }
    };
    return new Proxy(target, handler);
  };
}

export default proxyObserveDeep;
