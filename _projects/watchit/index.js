#!/usr/bin/env node
//allows file to be executable
const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const prog = require('caporal');
const fs = require('fs');
const { spawn } = require('child_process');
const chalk = require('chalk');

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

        let proc;
        
        const start = debounce(() => {
            if (proc) {
                proc.kill();
            } 
            proc = spawn('node', [name], { stdio: 'inherit' })
            console.log(chalk.bold.red('Starting watch process'));
        }, 100);
            
        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start); 
    });

    prog.parse(process.argv);

