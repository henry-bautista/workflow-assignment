const { bye } = require('../src/bye.js');

test('It Should display a bye message',() => {
    expect(bye()).toBe('See you boy!');
})
