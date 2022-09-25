// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Fizz Buzz", () => {
  it("fizzbuzz(30) should console log 30 times", () => {
    fizzBuzz(30);
    assert.equal(console.log.callCount, 30);
  });
  it("fizzbuzz(30) console logs correct values", () => {
    fizzBuzz(30);
    assert.equal(console.log.getCall(0).args[0], 1);
    assert.equal(console.log.getCall(1).args[0], 2);
    assert.equal(console.log.getCall(2).args[0], "fizz");
    assert.equal(console.log.getCall(3).args[0], 4);
    assert.equal(console.log.getCall(4).args[0], "buzz");
    assert.equal(console.log.getCall(5).args[0], "fizz");
    assert.equal(console.log.getCall(6).args[0], 7);
    assert.equal(console.log.getCall(7).args[0], 8);
    assert.equal(console.log.getCall(8).args[0], "fizz");
    assert.equal(console.log.getCall(9).args[0], "buzz");
    assert.equal(console.log.getCall(10).args[0], 11);
    assert.equal(console.log.getCall(11).args[0], "fizz");
    assert.equal(console.log.getCall(12).args[0], 13);
    assert.equal(console.log.getCall(13).args[0], 14);
    assert.equal(console.log.getCall(14).args[0], "fizzbuzz");
  });
});

mocha.run();
