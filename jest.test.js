let short64 = require('./dist/short64.js').default;

test('short64 and back from 0 to 100', () => {
    for (let i = 0; i < 100; i++) {
        short64andback(i);
        console.log(`Test 100 : case ${i} : ${short64.From(i)} `);
    }


});


test('short64 and back from 0 to 10 000 000', () => {
    for (let h = 0; h < 100; h++) {
        const hstep = h * 100000;
        for (let i = 0; i < 100000; i++) {
            short64andback(i + hstep);
        }

        console.log(`Test 10M : case ${hstep + 100000 - 1} : ${short64.From(hstep + 100000 - 1)} `);
    }

});

test('short64 and back from 0 to 1 000 000 000 in 1111 steps', () => {
    for (let h = 0; h < 1000; h++) {
        const hstep = h * 1000000;
        for (let i = 0; i < 1000000; i += 1111) {
            short64andback(i + hstep);
        }

        console.log(`Test 1B : case ${hstep + 1000000 - 1} : ${short64.From(hstep + 1000000 - 1)} `);
    }

});



function short64andback(i) {
    let s = short64.From(i);
    let n = short64.ToInt(s);
    // console.log(`${i} -> ${s} -> ${n} `);
    expect(n).toBe(i);
}