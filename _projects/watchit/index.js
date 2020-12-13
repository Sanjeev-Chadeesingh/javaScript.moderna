#!/usr/bin/env node
//allows file to be executable
const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const prog = require('caporal');

const start = debounce(() => {
    console.log('Starting user program');
}, 100);

chokidar
    .watch('.')
    .on('add', start)
    .on('change', () => console.log('File Changed'))
    .on('unlink', () => console.log('File Unlinked')); 