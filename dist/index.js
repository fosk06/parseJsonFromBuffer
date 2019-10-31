"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param  {} jsonBuffer a buffer
 * @param  {} encoding a string representing the encoding see "Buffer.from" from Node.js documentation
 * @Return {object}
 */
function parseJsonFromBuffer(jsonBuffer, encoding) {
    try {
        var strBuffer = Buffer.from(jsonBuffer).toString();
        var stringResult = Buffer.from(strBuffer, encoding).toString(); // transform the buffer to string with specific encoding
        var jsObject = JSON.parse(stringResult);
        return jsObject;
    }
    catch (error) {
        throw new Error('unable to parse payload, invalid JSON');
    }
}
exports.parseJsonFromBuffer = parseJsonFromBuffer;
