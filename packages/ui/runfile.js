const { run } = require('runjs')
 
function build () {
  run(`npm run build`)
}
 
module.exports = {
  build
}