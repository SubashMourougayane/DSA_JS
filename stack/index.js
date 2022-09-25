// Create a stack data structure.  The stack
// should be a class with methods 'push' and 'pop'.
// 'push' should add element to stack.
// 'pop' should remove top most element in the stack and return it.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2

class Stack {
	constructor() {}
}

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

mocha.setup('bdd');
const { assert } = chai;

describe('Stack', () => {
	it('push and pop methods exist', () => {
		const s = new Stack();
		s.push(1);
		s.pop();
	});
	it('has FILO / LIFO behavior.', () => {
		const browserHistory = new Stack();
		browserHistory.push('www.youtube.com');
		browserHistory.push('www.youtube.com/login/KodingKevin');
		browserHistory.push('www.youtube.com/watch/cats');
		browserHistory.push('www.youtube.com/watch/cats_meowing');

		//Pressing the back button on my browser
		assert.equal(browserHistory.pop(), 'www.youtube.com/watch/cats_meowing');

		const s = new Stack();
		s.push(1);
		s.push(2);
		s.push(3);
		assert.equal(s.pop(), 3);
		assert.equal(s.pop(), 2);
		assert.equal(s.pop(), 1);
	});
	it('pop returns null/undefined for empty stack.', () => {
		const browserHistory = new Stack();
		assert.equal(browserHistory.pop(), null);
	});
});

mocha.run();
