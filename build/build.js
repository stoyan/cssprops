var fs = require('fs');

var read = fs.readFileSync;
var write = fs.writeFileSync;

var dir = process.cwd() + '/raw/';

var index = ''; // as in index.js

var forward = [];
var latestie = 'ie11';

fs.readdir(dir, function (err, files) {
  if (err) {
      throw err;
  }
  files.forEach(function(f) {
    var name = f.replace('.txt', '');
    var props = read(dir + f).toString().trim().split('\n');

    writeBrowser(name, props);

    index += 'exports.' + name + ' = require("./browsers/' + name + '.js");\n';

    // ie forward (unversioned)
    if (name === latestie) {
      writeBrowser('ie', props);
      index += 'exports.ie = require("./browsers/ie.js");\n';
    }

    if (name === latestie || !/[0-9]/.test(name)) {
      // future-proof browser here, watch out
      forward = forward.concat(props);
    }

  });

  writeBrowser('forward', forward.reduce(function(unique, prop) {
    if (unique.indexOf(prop) < 0) {
      unique.push(prop);
    }
    return unique;
  }, []));

  index += 'exports.forward = require("./browsers/forward.js");\n';

  // write index
  write(process.cwd() + '/index.js', index);
});

function writeBrowser(name, props) {
  var contents = 'module.exports = [\n  "' + props.join('",\n  "') + '"\n];';
  // write browser modules
  write(process.cwd() + '/browsers/' + name + '.js', contents);
}

