const fib = require ("./fibonacci")
const ston = require ("./numToString")
//var fib = fibonacci;

describe("challenge4 suite", function() {
    ston.numToString(fib.fibonacci(5));

    it("should return the fibonacci number in words", function() {
        ston.numToString(fib.fibonacci(5))
    });
});
