"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param  {} jsonBuffer a buffer
 * @param  {} encoding a string representing the encoding see "Buffer.from" from Node.js documentation
 * @Return {object}
 */
function parseJsonFromBuffer(jsonBuffer, encoding) {
    try {
        if (typeof encoding !== 'string') {
            throw new Error('encoding is mandatory');
        }
        var str = jsonBuffer.toString();
        var stringResult = Buffer.from(str, encoding).toString(); // transform the buffer to string with specific encoding
        var jsObject = JSON.parse(stringResult);
        return jsObject;
    }
    catch (error) {
        throw new Error('unable to parse payload, invalid JSON');
    }
}
exports.parseJsonFromBuffer = parseJsonFromBuffer;
function encodeObjectToString(dataObject, encoding) {
    var buff = Buffer.from(JSON.stringify(dataObject));
    var encodedData = buff.toString(encoding);
    return encodedData;
}
exports.encodeObjectToString = encodeObjectToString;
