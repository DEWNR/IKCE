[![Project logo](./src/images/ag-logotype.svg)](https://koalacentre.org)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
# International Koala Centre of Excellence :koala:

A repository for creating templates and files for the IKCE website.
https://koalacentre.org

## Installing / Getting started
To install this repository, first make sure you are using node v10.4.2 or later then run either of the following commands.

```
$ yarn
```
```
$ npm install
```

## Developing and building
There are only 2 scripts to run.

```
$ yarn start

$ yarn production
```
`start` will compile all the files into a 'dev' folder and start a server for live reloading.

`production` will minify and uglify scss and javascript files optimize images and compile files into a 'production' folder

## Code notes
Eslint is using a slight variation on [js-standard-style](http://standardjs.com) to include semicolons at the end of blocks to ensure that there is one less thing to make us go insane.

Sometimes imagemin will need rebuilding. To do this run the following code:
```
$ npm rebuild jpegtran-bin
```

Stylelint is using [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)

## Credits
Build based on [webpack-gulp-boilerplate by shalachev](https://github.com/shalachev/webpack-gulp-boilerplate)


## TODO
* Build a site
* Revise revving/hashing for gulp task (there has to be a cleaner way)
* Add purgecss to reduce bloat of bulma and fontawesome
* Revise focus for form items