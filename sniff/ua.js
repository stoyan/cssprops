var str = navigator.userAgent;

var name;

if (str.indexOf('Firefox') !== -1) {
  name = 'firefox';
} else if (str.indexOf('Chrome') !== -1) {
  name = 'chrome';
} else if (str.indexOf('Opera') !== -1) {
  name = 'opera';
} else if (str.indexOf('Safari') !== -1) {
  name = 'safari';
  if (str.indexOf('Mobile') !== -1) {
    name = 'ios'
  }
} else if (str.indexOf('Trident/7') !== -1) {
  name = 'ie11';
} else if (str.indexOf('MSIE 10') !== -1) {
  name = 'ie10';
} else if (str.indexOf('MSIE 9') !== -1) {
  name = 'ie9';
} else if (str.indexOf('MSIE 8') !== -1) {
  name = 'ie8';
} else if (str.indexOf('MSIE 7') !== -1) {
  name = 'ie7';
} else if (str.indexOf('MSIE 6') !== -1) {
  name = 'ie6';
}