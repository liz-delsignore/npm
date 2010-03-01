#!/usr/local/bin/node
var fs = require("fs"),
  version = process.env["npm.package.version"],
  bin = "/usr/local/bin/npm-"+version,
  clijs = require("path").join(process.cwd(), "cli.js");

fs.lstat(bin, function (er, st) {
  if (er) fs.unlink(bin, linkBin);
  else linkBin();
});

function linkBin (er) {
  if (er) throw er;
  fs.symlinkSync(clijs, bin, function (er) {
    if (er) throw er;
  });
}
