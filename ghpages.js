//This script runs specifically for gh-pages deploy
//We need to tell gh-pages to allow dotfiles to prevent jekyll from ignored directories with underscore prefixes
//This is a lot of words
//Reference: https://stackoverflow.com/questions/48244650/how-to-prevent-jekyll-build-on-github-pages
//Reference: https://www.npmjs.com/package/gh-pages/v/3.2.2 > options.dotfiles
var ghpages = require('gh-pages');

ghpages.publish('dist',{dotfiles: true}, function(err) {});