# castenv

![Build Status](https://img.shields.io/travis/tonymet/castenv.svg)
![Downloads](https://img.shields.io/npm/dm/castenv.svg)
![Downloads](https://img.shields.io/npm/dt/castenv.svg)
![npm version](https://img.shields.io/npm/v/castenv.svg)
![dependencies](https://img.shields.io/david/tonymet/castenv.svg)
![dev dependencies](https://img.shields.io/david/dev/tonymet/castenv.svg)
![License](https://img.shields.io/npm/l/castenv.svg)

## Overview

Environment variables like `MAX_THREADS=5` , `ENABLE_DEBUG=false` are usually imported into process.env as strings.
This leads to subtle bugs when treating them like booleans or numbers e.g. `if (process.env['ENABLE_DEBUG'])...`
because "false" equals true in JS

`castenv` uses JSON.parse() to convert env variables into native types.  `castenv.cast()` will modify process.env,
 and `castenv.env()` will leave process.env unmodified.

## Getting Started

Install it via npm:

```shell
npm install castenv
```

Include in your project:

```javascript
// cast process.env in place
require("castenv").cast()

// alternatively, don't modify process.env
var env = require("castenv").env()
```


## Example Casting
```
process.env["TEST_NUMBER_VALUE"] = "5"
console.log(typeof process.env["TEST_NUMBER_VALUE"])
// "string"
require("castenv").cast()
console.log(typeof process.env["TEST_NUMBER_VALUE"])
// number
```
## License

MIT
