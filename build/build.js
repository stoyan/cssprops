var fs = require('fs');

var read = fs.readFileSync;
var write = fs.writeFileSync;

var dir = process.cwd() + '/raw/';

var index = '';

fs.readdir(dir, function (err, files) {
  if (err) {
      throw err;
  }
  files.forEach(function(f) {
    var name = f.replace('.txt', '');
    var contents = read(dir + f).toString().trim().split('\n').join('",\n  "');
    contents = "var " + name + ' = [\n  "' + contents + '"\n];';
    contents += "\n\nexports." + name + ' = ' + name + ';';
    // write browser modules
    write(process.cwd() + '/browsers/' + name + '.js', contents);
    
    index += 'exports.' + name + ' = require("./browsers/' + name + '.js").' + name + ';\n';

  });
  
  // write index
  write(process.cwd() + '/index.js', index);

});

    


