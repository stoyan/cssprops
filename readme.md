List of CSS properties supported by the browsers in the wild

## Why

Tools. Transpilers. Pre/post processors.

## Installation

    $ npm install cssprops

## Browsers

The list of maintained browsers is as follows:

 - IE6
 - IE7
 - IE8
 - IE9
 - IE10
 - IE11
 - IE (same as IE11)
 - Chrome (35.0.1916.114)
 - Firefox (32.0a1)
 - Safari (Version 7.0.4 (9537.76.4))
 - iOS Safari - latest
 - Opera - latest
 - Forward - merge of all non-versioned browsers

The idea of "forward" is that any feature supported in any modern browser has a shot of being supported by others eventually.
This is an acceptable approximation - let's your transpiler output "future-proof" CSS.

## Usage

After installation, go:

```js
var cssprops = require('cssprops');
Array.isArray(cssprops.ie6); // true
cssprops.ie6.length; // 115
cssprops.firefox.indexOf('zoom'); // -1, no `zoom` in FF
```

What's available:

```js
Object.keys(cssprops);
```

Result:

    [ 'chrome',
      'firefox',
      'ie10',
      'ie11',
      'ie',
      'ie6',
      'ie7',
      'ie8',
      'ie9',
      'ios',
      'opera',
      'safari',
      'forward' ]

## Contribute

 - Run http://www.phpied.com/files/css-props/test.html in your browser (source is here on github)
 - If you see a message, send a pull request to replace the browser file (e.g. chrome.txt) from the `raw` dir
 - Don't worry about .js files, these are generated by the build script
 - Properties rarely go away, so pull request to remove properties are unlikely