#!/usr/bin/env node
//allows file to be executable
const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const prog = require('caporal');
const fs = require('fs');

prog
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({ filename }) => {
        const name = filename || 'index.js';
        try {
            await fs.promises.access(name);
        } catch (err) {
            throw new Error(`Could not find the file ${name}`);
        }
        
        const start = debounce(() => {
            console.log('Starting user program');
        }, 100);
        
        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start); 
    });

    prog.parse(process.argv);

