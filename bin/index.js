#!/usr/bin/env node

const formatter = require('../index');
const pkg = require('../package');
const path = require('path');
const promisifyAll = require('bluebird').promisifyAll;
const fs = promisifyAll(require('fs'));

function range(val) {
    return val.split('..').map(Number);
}

const program = require('commander')
    .version(pkg.version)
    .description(`${pkg.name} (v${pkg.version}): ${pkg.description}`)
    .usage('<file> [options]')
    .option('-l, --lang [value]', 'specify language of page content')
    .option('-t, --toc [range]', 'specify min and max level of table of contents', range)
    .option('-n, --noToc', 'do not render table of contents')
    .parse(process.argv);

const srcFilename = path.join(program.args[0]);

program.toc = program.toc || [];

fs.readFileAsync(srcFilename, 'utf8')
    .then(readme => formatter(readme, {
        language: program.lang,
        toc: program.noToc ? false : { minLevel: program.toc[0], maxLevel: program.toc[1] }
    }))
    .then(html => console.log(html))
    .catch(err => console.error(err));
