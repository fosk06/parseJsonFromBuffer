const test =''

function parseJsonFromBuffer(jsonBuffer: ArrayBuffer | SharedArrayBuffer, encoding:  "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex") {
    try {
        const strBuffer = Buffer.from(jsonBuffer).toString()
        const stringResult = Buffer.from(strBuffer,encoding).toString() // transform base 64 env var to string
        const res = JSON.parse(stringResult);
        return res;
    } catch (error) {
        throw new Error('unable to parse payload, invalid JSON')
    }
  }