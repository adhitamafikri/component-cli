const fs = require('fs')
const path = require('path')

function read(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath))
  } catch (err) {
    console.log('Something is wrong when reading file', err)
    process.exit(1)
  }
}

function write(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data), err => {
    if (err) {
      console.log('Something is wrong when writing file', err)
      process.exit(1)
    }
  })
}

function sanitizeFragment(frag) {
  let word = frag.toLowerCase()
  let firstLetter = word[0].toUpperCase()

  return firstLetter + word.substr(1, word.length)
}

// exported functions
function composeFileName(fileName) {
  console.log('composing file name...')
  let result = ''
  const frags = fileName.split('-')
  frags.forEach(frag => result += sanitizeFragment(frag))

  console.log('fileName: ', fileName)
  console.log('fileName after split(): ', result)
  return result
}

function createFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    write(filePath, content)
    console.log('successfully created file...')
  } else {
    console.log('file already exists...')
  }
}

module.exports = {
  composeFileName,
  createFile
}
