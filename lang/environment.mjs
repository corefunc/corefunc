// /**
//  * @deprecated
//  */
// export function langEnvironment() {
//   const inBrowser = typeof window !== "undefined";
//   // @ts-ignore
//   // eslint-disable-next-line no-undef
//   const inWeex = typeof WXEnvironment !== "undefined" && Boolean(WXEnvironment.platform);
//   // @ts-ignore
//   // eslint-disable-next-line no-undef
//   const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
//   const UA = inBrowser && window.navigator.userAgent.toLowerCase();
//   const isIE = UA && /msie|trident/.test(UA);
//   const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
//   const isEdge = UA && UA.indexOf("edge/") > 0;
//   const isAndroid = (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
//   const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
//   const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
//   const isPhantomJS = UA && /phantomjs/.test(UA);
//   let isFF = UA && UA.match(/firefox\/(\d+)/);
//   return {
//     UA,
//     inBrowser,
//     inWeex,
//     isAndroid,
//     isChrome,
//     isEdge,
//     isFF: isFF && isFF.length > 0,
//     isIE,
//     isIE9,
//     isIOS,
//     isPhantomJS,
//     weexPlatform,
//   };
// }
