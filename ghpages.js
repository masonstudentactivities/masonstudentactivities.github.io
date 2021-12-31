var ghpages = require('gh-pages');

ghpages.publish('dist',{dotfiles: true}, function(err) {});