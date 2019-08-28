#!/usr/bin/env node
const pckg = require('./../package.json')
const program = require('commander')

const { create } = require('./../lib/components')

program
  .version(pckg.version)
  .option('-u, --uikit <name>', 'Create uikit components on components/uikit')
  .option('-p, --pages <name>', 'Create page component on components/pages')
  .parse(process.argv)

if (program.uikit) {
  create(process.argv[3], 'uikit')
  console.log(`Creating uikit: ${process.argv[3]}`)
}

if (program.pages) {
  create(process.argv[3], 'pages')
  console.log(`Creating pages: ${process.argv[3]}`)
}
