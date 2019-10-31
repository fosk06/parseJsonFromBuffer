/**
 * @param  {} jsonBuffer a buffer
 * @param  {} encoding a string representing the encoding see "Buffer.from" from Node.js documentation
 * @Return {object}
 */
export declare function parseJsonFromBuffer(jsonBuffer: string | ArrayBuffer | SharedArrayBuffer, encoding: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"): any;
