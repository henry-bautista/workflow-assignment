const { hello } = require('../src/hello.js');

test('It Should display a greeting message',() => {
    expect(hello()).toBe('Hello world!');
})
