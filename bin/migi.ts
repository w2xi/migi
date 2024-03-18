#!/usr/bin/env node

import { Command } from 'commander'
import pkg from '../package.json'

const program = new Command()

program
  .name('migi')
  .version(pkg.version)
  .usage('<command> [options]')
  .description('Migi CLI')
  .command('create <template> <project-name>', 'create a new project based on a template')
  .parse(process.argv)