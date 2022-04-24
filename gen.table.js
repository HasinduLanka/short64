let short64 = require('./dist/short64.js').default;

function genRow(i) {
    let s64 = short64.From(i);
    let b64 = btoa(i.toString())

    return `| ${i} | ${i.toString().length} | **'${s64}'** | **${s64.length}** | '${b64}' | ${b64.length} |`
}

console.log(genRow(0))
console.log(genRow(1))
console.log(genRow(9))
console.log(genRow(44))
console.log(genRow(100))
console.log(genRow(2000))
console.log(genRow(49 * 64 - 1))
console.log(genRow(64 * 64 - 1))
console.log(genRow(49 * 49 * 64 - 1))
console.log(genRow(64 * 64 * 64 - 1))
console.log(genRow(49 * 49 * 49 * 64 - 1))
console.log(genRow(64 * 64 * 64 * 64 - 1))
console.log(genRow(49 * 49 * 49 * 49 * 64 - 1))
console.log(genRow(64 * 64 * 64 * 64 * 64 - 1))
console.log(genRow(49 * 49 * 49 * 49 * 49 * 64 - 1))
console.log(genRow(64 * 64 * 64 * 64 * 64 * 64 - 1))
console.log(genRow(49 * 49 * 49 * 49 * 49 * 49 * 64 - 1))
console.log(genRow(64 * 64 * 64 * 64 * 64 * 64 * 64 - 1))
console.log(genRow(Number.MAX_SAFE_INTEGER))