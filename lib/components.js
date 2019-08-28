const path = require('path')
const { composeFileName, createFile } = require('./helpers')
const templateUIKit = require('./template/uikit')
const templatePages = require('./template/pages')

function create(name, type) {
  const fileName = composeFileName(name)
  console.log(`the component: ${fileName} for ${type} is being created...`)

  if (type == 'uikit') {
    const filePath = path.resolve(__dirname, `../src/components/uikit/${fileName}.js`)
    createFile(filePath, templateUIKit(fileName))
  } else {
    const filePath = path.resolve(__dirname, `../src/components/pages/${fileName}.js`)
    createFile(filePath, templatePages(fileName))
  }

}

module.exports = {
  create
}
