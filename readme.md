# number-input

[![Build Status](https://travis-ci.org/Alfredo-Delgado/number-input.png?branch=master)](https://travis-ci.org/Alfredo-Delgado/number-input)

Number Input Plugin

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'number-input';
```

### CommonJS use

Use `require` to load `number-input` and everything else
needed to create a template that uses `number-input`:

```js
var plugin = require("number-input");
```

## AMD use

Configure the `can` and `jquery` paths and the `number-input` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'number-input',
		    	location: 'node_modules/number-input/dist/amd',
		    	main: 'lib/number-input'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/number-input/dist/global/number-input.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
