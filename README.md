# Voorhoede Ocelot Formatter

[![Coverage Status](https://coveralls.io/repos/github/voorhoede/voorhoede-ocelot-formatter/badge.svg?branch=master)](https://coveralls.io/github/voorhoede/voorhoede-ocelot-formatter?branch=master)

Format plain content as Voorhoede pages

## Install

Voorhoede Ocelot Formatter is written in [Node.js](http://nodejs.org/) and can be installed via [npm](https://npmjs.org/):

```bash
$ npm install voorhoede-ocelot-formatter
```

## Usage

You can use Voorhoede Ocelot Formatter both as a CLI tool and programmatically in JS.

### CLI

Convert markdown file to HTML and output content to HTML file:

```bash
$ formatter README.md path/to/output/file.html
```

Or simply log output to the console:

```bash
$ formatter README.md
```

### JS

To use Voorhoede Ocelot Formatter programmatically import the `voorhoede-ocelot-formatter` module:

```javascript
const formatter = require('voorhoede-ocelot-formatter');
```

Convert markdown file to a Voorhoede page

```javascript
formatter('./README.md')
```
