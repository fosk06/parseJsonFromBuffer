# parseJsonFromBuffer

A very simple module that transform a buffer to a JS object.
It takes a buffer, convert it to string then parse the JSON and return the javascript object.

## Usage

### Javascript

```javascript
const {parseJsonFromBuffer} = require('parse-json-from-buffer');
const testBuffer = Buffer.from('eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UifQ') // json stringified base64 string
const result = parseJsonFromBuffer(testBuffer, 'base64') // output { firstName: 'John', lastName: 'Doe' }
```

### TypeScript

```typescript
import  parseJsonFromBuffer  from 'parse-json-from-buffer';
const testBuffer = Buffer.from('eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UifQ') // json stringified base64 string
const result = parseJsonFromBuffer(testBuffer, 'base64') // output { firstName: 'John', lastName: 'Doe' }
```

## Test

You can run tests with this command:

```bash
npm test
```
