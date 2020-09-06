/**
 * @name convertToSha1
 * @param {string} fromText
 * @returns {string}
 */
export function convertToSha1(fromText: string): string {
  let _rotLeft = function (num: any, text: any) {
    return (num << text) | (num >>> (32 - text));
  };

  let _cvtHex = function (val: any) {
    let str = "";
    let hexIndex;
    let hexValue;

    for (hexIndex = 7; hexIndex >= 0; hexIndex--) {
      hexValue = (val >>> (hexIndex * 4)) & 0x0f;
      str += hexValue.toString(16);
    }
    return str;
  };

  let blockStart;
  let index, indexSec;
  let word = new Array(80);
  let H0 = 0x67452301;
  let H1 = 0xefcdab89;
  let H2 = 0x98badcfe;
  let H3 = 0x10325476;
  let H4 = 0xc3d2e1f0;
  let strA, strB, strC, strD, strE;
  let temp;

  // utf8_encode
  fromText = /*unescape*/ encodeURIComponent(fromText);
  let strLen = fromText.length;

  let wordArray = [];
  for (index = 0; index < strLen - 3; index += 4) {
    indexSec =
      (fromText.charCodeAt(index) << 24) |
      (fromText.charCodeAt(index + 1) << 16) |
      (fromText.charCodeAt(index + 2) << 8) |
      fromText.charCodeAt(index + 3);
    wordArray.push(indexSec);
  }

  switch (strLen % 4) {
    case 0:
      index = 0x080000000;
      break;
    case 1:
      index = (fromText.charCodeAt(strLen - 1) << 24) | 0x0800000;
      break;
    case 2:
      index = (fromText.charCodeAt(strLen - 2) << 24) | (fromText.charCodeAt(strLen - 1) << 16) | 0x08000;
      break;
    case 3:
      index =
        (fromText.charCodeAt(strLen - 3) << 24) |
        (fromText.charCodeAt(strLen - 2) << 16) |
        (fromText.charCodeAt(strLen - 1) << 8) |
        0x80;
      break;
  }

  wordArray.push(index);

  while (wordArray.length % 16 !== 14) {
    wordArray.push(0);
  }

  wordArray.push(strLen >>> 29);
  wordArray.push((strLen << 3) & 0x0ffffffff);

  for (blockStart = 0; blockStart < wordArray.length; blockStart += 16) {
    for (index = 0; index < 16; index++) {
      word[index] = wordArray[blockStart + index];
    }
    for (index = 16; index <= 79; index++) {
      word[index] = _rotLeft(word[index - 3] ^ word[index - 8] ^ word[index - 14] ^ word[index - 16], 1);
    }

    strA = H0;
    strB = H1;
    strC = H2;
    strD = H3;
    strE = H4;

    for (index = 0; index <= 19; index++) {
      temp = (_rotLeft(strA, 5) + ((strB & strC) | (~strB & strD)) + strE + word[index] + 0x5a827999) & 0x0ffffffff;
      strE = strD;
      strD = strC;
      strC = _rotLeft(strB, 30);
      strB = strA;
      strA = temp;
    }

    for (index = 20; index <= 39; index++) {
      temp = (_rotLeft(strA, 5) + (strB ^ strC ^ strD) + strE + word[index] + 0x6ed9eba1) & 0x0ffffffff;
      strE = strD;
      strD = strC;
      strC = _rotLeft(strB, 30);
      strB = strA;
      strA = temp;
    }

    for (index = 40; index <= 59; index++) {
      temp =
        (_rotLeft(strA, 5) + ((strB & strC) | (strB & strD) | (strC & strD)) + strE + word[index] + 0x8f1bbcdc) &
        0x0ffffffff;
      strE = strD;
      strD = strC;
      strC = _rotLeft(strB, 30);
      strB = strA;
      strA = temp;
    }

    for (index = 60; index <= 79; index++) {
      temp = (_rotLeft(strA, 5) + (strB ^ strC ^ strD) + strE + word[index] + 0xca62c1d6) & 0x0ffffffff;
      strE = strD;
      strD = strC;
      strC = _rotLeft(strB, 30);
      strB = strA;
      strA = temp;
    }

    H0 = (H0 + strA) & 0x0ffffffff;
    H1 = (H1 + strB) & 0x0ffffffff;
    H2 = (H2 + strC) & 0x0ffffffff;
    H3 = (H3 + strD) & 0x0ffffffff;
    H4 = (H4 + strE) & 0x0ffffffff;
  }

  temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4);
  return temp.toLowerCase();
}
