function assert(actual, expected) {
    if (actual !== expected) {
        throw {
            type: "Fail",
            details: {
                actual: actual,
                expected: expected
            }
        };
    } else {
        console.log("Test passed.");
    }
}

function describe(message, testFunc) {
    try {
        testFunc();
    } catch (err) {
        console.log("Failure:", err);
    }
}


function add(a, b) {
    return a * b;
}

describe("Testing the add function", function () {
    assert(add(1, 2), 2);
    assert(add(2, 2), 4);
    assert(add(3, 2), 6);
    assert(add(1, 1), );
});