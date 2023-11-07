quote = "'"
str = null
printQueue('str = null')
printQueue('function printQueue(x) {')
printQueue('    if (str === null) {')
printQueue('        str = []')
printQueue('        console.log(`quote = "${quote}"`)')
printQueue('        console.log("str = null")')
printQueue('    }')
printQueue('    else {')
printQueue('        str.push(x)')
printQueue('    }')
printQueue('    console.log(`printQueue(${quote}${x}${quote})`)')
printQueue('}')
printQueue('function end() {')
printQueue('    console.log("end()")')
printQueue('    for (x = 0; x < str.length; x++) {')
printQueue('        console.log(str[x])')
printQueue('    }')
printQueue('}')
end()
function printQueue(x) {
    if (str === null) {
        str = []
        console.log(`quote = "${quote}"`)
        console.log("str = null")
    }
    else {
        str.push(x)
    }
    console.log(`printQueue(${quote}${x}${quote})`)
}
function end() {
    console.log("end()")
    for (x = 0; x < str.length; x++) {
        console.log(str[x])
    }
}