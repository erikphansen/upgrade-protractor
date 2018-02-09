# upgrade-protractor

A set of simple scripts that upgrades `protractor` and `gulp-protractor` so that Protractors can run locally.

## Installation/Setup

You'll want to make the script executable:

`$ chmod a+x upgrade-protractor`

Then you'll want to symlink the scripts into a directory that's in your PATH. These snippets assume you are currently in the directory that you cloned this repo to:

```sh
$ ln -s (pwd)/upgrade-protractor /usr/local/bin/
$ ln -s (pwd)/update-package.js /usr/local/bin/
```

## Usage

Now simply run `upgrade-protractor` in the Womply app directory that you want to run Protractors in. The scripts will work together to make a temporary change to your package.json, run `npm update`, then restore package.json to what it was when the script started.
