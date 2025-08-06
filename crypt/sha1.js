function rawStringToBigEndian(text) {
  let output = Array(text.length >> 2);
  for (let index = 0; index < output.length; index += 1) {
    output[index] = 0;
  }
  for (let index = 0; index < text.length * 8; index += 8) {
    output[index >> 5] |= (text.charCodeAt(index / 8) & 0xff) << (24 - (index % 32));
  }
  return output;
}

function bigEndianToString(text) {
  let output = "";
  for (let index = 0; index < text.length * 32; index += 8) {
    output += String.fromCharCode((text[index >> 5] >>> (24 - (index % 32))) & 0xff);
  }
  return output;
}

function bigEndianToSha1(bigEndianArray, textLength) {
  bigEndianArray[textLength >> 5] |= 0x80 << (24 - (textLength % 32));
  bigEndianArray[(((textLength + 64) >> 9) << 4) + 15] = textLength;
  const word = Array(80);
  let alpha = 1732584193;
  let beta = -271733879;
  let gamma = -1732584194;
  let delta = 271733878;
  let epsilon = -1009589776;
  for (let index = 0; index < bigEndianArray.length; index += 16) {
    const originalAlpha = alpha;
    const originalBeta = beta;
    const originalGamma = gamma;
    const originalDelta = delta;
    const originalEpsilon = epsilon;
    for (let dyadic = 0; dyadic < 80; dyadic += 1) {
      if (dyadic < 16) {
        word[dyadic] = bigEndianArray[index + dyadic];
      } else {
        word[dyadic] = bitwiseRotateToLeft(
          word[dyadic - 3] ^ word[dyadic - 8] ^ word[dyadic - 14] ^ word[dyadic - 16],
          1,
        );
      }
      const triplet = addSafe(
        addSafe(bitwiseRotateToLeft(alpha, 5), sha1Triplet(dyadic, beta, gamma, delta)),
        addSafe(addSafe(epsilon, word[dyadic]), sha1AdditiveConstantForCurrentIteration(dyadic)),
      );
      epsilon = delta;
      delta = gamma;
      gamma = bitwiseRotateToLeft(beta, 30);
      beta = alpha;
      alpha = triplet;
    }
    alpha = addSafe(alpha, originalAlpha);
    beta = addSafe(beta, originalBeta);
    gamma = addSafe(gamma, originalGamma);
    delta = addSafe(delta, originalDelta);
    epsilon = addSafe(epsilon, originalEpsilon);
  }
  return Array(alpha, beta, gamma, delta, epsilon);
}

function sha1Triplet(triplet, alpha, beta, gamma) {
  if (triplet < 20) {
    return (alpha & beta) | (~alpha & gamma);
  }
  if (triplet < 40) {
    return alpha ^ beta ^ gamma;
  }
  if (triplet < 60) {
    return (alpha & beta) | (alpha & gamma) | (beta & gamma);
  }
  return alpha ^ beta ^ gamma;
}

function sha1AdditiveConstantForCurrentIteration(aConstant) {
  return aConstant < 20 ? 1518500249 : aConstant < 40 ? 1859775393 : aConstant < 60 ? -1894007588 : -899497514;
}

function addSafe(alpha, beta) {
  const lsw = (alpha & 0xffff) + (beta & 0xffff);
  const msw = (alpha >> 16) + (beta >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

function bitwiseRotateToLeft(aNumber, count) {
  return (aNumber << count) | (aNumber >>> (32 - count));
}

function stringToRawUtf8String(text) {
  let output = "";
  let index = -1;
  let x;
  let y;
  while (++index < text.length) {
    x = text.charCodeAt(index);
    y = index + 1 < text.length ? text.charCodeAt(index + 1) : 0;
    if (0xd800 <= x && x <= 0xdbff && 0xdc00 <= y && y <= 0xdfff) {
      x = 0x10000 + ((x & 0x03ff) << 10) + (y & 0x03ff);
      index += 1;
    }
    if (x <= 0x7f) {
      output += String.fromCharCode(x);
    } else if (x <= 0x7ff) {
      output += String.fromCharCode(0xc0 | ((x >>> 6) & 0x1f), 0x80 | (x & 0x3f));
    } else if (x <= 0xffff) {
      output += String.fromCharCode(0xe0 | ((x >>> 12) & 0x0f), 0x80 | ((x >>> 6) & 0x3f), 0x80 | (x & 0x3f));
    } else if (x <= 0x1fffff) {
      output += String.fromCharCode(
        0xf0 | ((x >>> 18) & 0x07),
        0x80 | ((x >>> 12) & 0x3f),
        0x80 | ((x >>> 6) & 0x3f),
        0x80 | (x & 0x3f),
      );
    }
  }
  return output;
}

function sha1OfRawString(text) {
  return bigEndianToString(bigEndianToSha1(rawStringToBigEndian(text), text.length * 8));
}

function rawStringToHexString(text) {
  let output = "";
  let hex;
  for (let index = 0; index < text.length; index += 1) {
    hex = text.charCodeAt(index);
    output += "0123456789abcdef".charAt((hex >>> 4) & 0x0f) + "0123456789abcdef".charAt(hex & 0x0f);
  }
  return output;
}

export function cryptSha1(text) {
  return rawStringToHexString(sha1OfRawString(stringToRawUtf8String(text)));
}
