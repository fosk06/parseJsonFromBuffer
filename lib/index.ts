
/**
 * @param  {} jsonBuffer a buffer
 * @param  {} encoding a string representing the encoding see "Buffer.from" from Node.js documentation
 * @Return {object}
 */
export function parseJsonFromBuffer(jsonBuffer: string | ArrayBuffer | SharedArrayBuffer , encoding:  "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex") {
    try {
        if(typeof encoding !== 'string') {
           throw new Error('encoding is mandatory');
        }
        const str = jsonBuffer.toString()
        const stringResult = Buffer.from(str,encoding).toString() // transform the buffer to string with specific encoding
        const jsObject = JSON.parse(stringResult);
        return jsObject;
    } catch (error) {
        throw new Error('unable to parse payload, invalid JSON')
    }
  }

