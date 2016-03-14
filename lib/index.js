var fs      = require('fs'),
    path    = require('path'),
    process = require('process'),
    exec    = require('child_process').exec,
    cdir    = process.cwd();
//lessc lab.less --autoprefix="last 5 versions"
var main = {}
main.init = function(arg){
  this.destPath = arg[0] ? arg[0] : '../css/page/';
  this.scan();
  this.watch();
}
main.scan = function(){
  var that = this;
  var file = fs.readdirSync(cdir).filter( v => /\.less$/.test(v) );
  file.forEach( v => that.compile(v) );
}
main.compile = function(filename){
  if(/\.less$/i.test(filename)){
    var outFilename = filename.replace(/\.less$/, '\.css'),
        outPath = this.destPath ? path.join(cdir, this.destPath, outFilename) : path.join(cdir, outFilename);
    exec('lessc '+path.join(cdir, filename)+' '+outPath+' '+"--autoprefix", function(err, stdout, stderr){
      if(err){
        console.log(err)
      }else{
        console.log( path.join(cdir, filename) + ' >>>>>> '+outPath);
      }
    });
  }
}
main.watch = function(){
  var that = this;
  fs.watch(cdir, function (event, filename) {
    if(event === 'change') that.compile(filename);
  });
}
module.exports = main;