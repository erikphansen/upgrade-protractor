# upgrade-protractor

A simple Node script that upgrades `protractor` and `gulp-protractor` so that Protractors can run locally.

## Installation/Setup

You'll want to make the script executable:

`$ chmod a+x upgrade-protractor`

Then you'll want to symlink the script into a directory that's in your PATH:

`$ ln -s (pwd)/upgrade-protractor /usr/local/bin/`

## Usage

Now simply run `upgrade-protractor` in the Womply app directory that you need to run Protractors in.

### TODO

- make this a Fish script that calls out to the node script to update the package.json, then calls `npm update` directly and finally reverts package.json back to its original state
