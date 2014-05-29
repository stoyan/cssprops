var s = document.documentElement.style;

var properties = {};

for (var i in s) {

  if (typeof s[i] !== "string" || i.indexOf("css") === 0) {
    continue;
  }

  if (i === 'MozOSXFontSmoothing') {
    // you moz, you, trying to break the otherwise infallible case logic
    i = 'MozOsxFontSmoothing'; 
  }

  var p = i.replace(/[A-Z]/g, function(match) {
    return '-' + match.toLowerCase()
  });
  if (p.charAt(0) === '-' || // prefix, e.g. Moz, O, Apple
      p.indexOf('webkit') === 0 || // yup, webkit
      p.indexOf('ms') === 0 ||
      (p.indexOf('op') === 0 && /[A-Z]/.test(p.charAt(2))) // more opera, e.g. opVoiceVolume
      ) {
    parts = p.substr(1).split('-');
    parts.shift();
    p = parts.join('-');
  }
  properties[p] = 1;
}

var props = [];
for (var i in properties) {
  props.push(i);
}
props = props.sort();

var out = props.join('\n');

