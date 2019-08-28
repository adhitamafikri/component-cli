function generate(name) {
  return `import React from 'react'

    function ${name}() {
      return (
        <h1>This is ${name} for uikit/component</h1>
      )
    }

    export default ${name}
  `
}

module.exports = generate
