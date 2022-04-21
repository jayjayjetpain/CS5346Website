let json = require('./package.json')
const ob = json
var a = 'npm i -g '
// @types/slug ^0.9.1
Object.entries(ob['dependencies']).forEach(e => {
    a = a + ' ' + e[0] + '@' + e[1] + ' '
    // console.log(e[0], )
})
const { exec } = require('child_process')
console.log('dependencies', a)
exec(a, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    }
})


var b = 'npm i -g '
// @types/slug ^0.9.1
Object.entries(ob['devDependencies']).forEach(e => {
    b = b + ' ' + e[0] + '@' + e[1] + ' '
    // console.log(e[0], )
})
console.log('devDependencies', b)
exec(b, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    }
})