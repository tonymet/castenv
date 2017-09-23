# castenv

![Build Status](https://img.shields.io/travis//castenv.svg)
![Coverage](https://img.shields.io/coveralls//castenv.svg)
![Downloads](https://img.shields.io/npm/dm/castenv.svg)
![Downloads](https://img.shields.io/npm/dt/castenv.svg)
![npm version](https://img.shields.io/npm/v/castenv.svg)
![dependencies](https://img.shields.io/david//castenv.svg)
![dev dependencies](https://img.shields.io/david/dev//castenv.svg)
![License](https://img.shields.io/npm/l/castenv.svg)



## Getting Started

Install it via npm:

```shell
npm install castenv
```

Include in your project:

```javascript
// cast process.env in place
require("castenv").cast();

// alternatively, don't modify process.env
var env = require("castenv").env()
console.log(env["NODE_DEBUG"])
```

## License

MIT
