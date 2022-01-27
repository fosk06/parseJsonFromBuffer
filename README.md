# parseJsonFromBuffer

A very simple module that transform a buffer to a JS object.
It takes a buffer, convert it to string then parse the JSON and return the javascript object.

## Usage

### Javascript

```javascript
const {parseJsonFromBuffer,encodeObjectToString} = require('parse-json-from-buffer');
const secrets = {secretOne: "changeMe", secretTwo: "changeMeToo"};
// encode your js object (must be allow JSON.STRINGIFY)
const encodedSecrets = encodeObjectToString(secrets, 'base64');

const testBuffer = Buffer.from(encodedSecrets) // json stringified base64 string
// revert the process
const result = parseJsonFromBuffer(testBuffer, 'base64') // output {secretOne: "changeMe", secretTwo: "changeMeToo"};
```

### TypeScript

```typescript
import  parseJsonFromBuffer,encodeObjectToString  from 'parse-json-from-buffer';
const secrets = {secretOne: "changeMe", secretTwo: "changeMeToo"};
// encode your js object (must be allow JSON.STRINGIFY)
const encodedSecrets = encodeObjectToString(secrets, 'base64');

const testBuffer = Buffer.from(encodedSecrets) // json stringified base64 string
// revert the process
const result = parseJsonFromBuffer(testBuffer, 'base64') // output {secretOne: "changeMe", secretTwo: "changeMeToo"};
```

## Test

You can run tests with this command:

```bash
npm test
```
