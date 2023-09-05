import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import * as install from './install';
import * as test from './test';
import * as analyze from "./analyze"

const program = new Command();

program
  .command('install')
  .description('Installs dependencies in userland')
  .action(() => {
    // Here you can do function call
    install.installDependencies();
    process.exit(0);
  });

program
  .command('test')
  .description('Run tests')
  .action(() => {
    // Here you can do function call
    test.testDependencies();
    process.exit(0);
  });

program
  .command('<URL_FILE>')
  .description('Analyzes provided URLs')
  .action((URL_FILE) => {
    // Here you can do function call
    analyze.testDependencies(URL_FILE);

    process.exit(0);
  });

program.parse(process.argv);
