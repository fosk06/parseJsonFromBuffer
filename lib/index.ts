
/**
 * @param  {} jsonBuffer a buffer
 * @param  {} encoding a string representing the encoding see "Buffer.from" from Node.js documentation
 * @Return {object}
 */
export function parseJsonFromBuffer(jsonBuffer: ArrayBuffer | SharedArrayBuffer, encoding:  "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex") {
    try {
        const strBuffer = Buffer.from(jsonBuffer).toString()
        const stringResult = Buffer.from(strBuffer,encoding).toString() // transform the buffer to string with specific encoding
        const jsObject = JSON.parse(stringResult);
        return jsObject;
    } catch (error) {
        throw new Error('unable to parse payload, invalid JSON')
    }
  }

