const MathHelper = require("../libs/math.helper");

/**
 * Test add function
 */
function test_add(){
    const a  = 1;
    const b = 5;
    const c = MathHelper.add(a, b);

    if (c !== 6) {
        throw "Function 'add' Failed"
    }   
    console.info("Function 'add' OK")
}

/**
 * Test Runner
 */
(function () {
    test_add();
})()

