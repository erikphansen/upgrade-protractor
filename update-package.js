#!/usr/bin/env node
const fs = require('fs');

console.log('Reading in `package.json`...');
// read in package.json
const packageFileContents = fs.readFileSync('./package.json', {
  encoding: 'utf8'
});
const package = JSON.parse(packageFileContents);

if (package.devDependencies['gulp-protractor']) {
  console.log('Updating gulp-protractor to version 4.1.0');
  package.devDependencies['gulp-protractor'] = '4.1.0';
} else {
  console.log('There is no `gulp-protractor` entry to update');
}

if (package.devDependencies['protractor']) {
  console.log('Updating protractor to version 5.1.1');
  package.devDependencies['protractor'] = '5.1.1';
} else {
  console.log('There is no `protractor` entry to update');
}

console.log('Saving `package.json`...');
fs.writeFileSync('./package.json', JSON.stringify(package), {
  encoding: 'utf8'
});
