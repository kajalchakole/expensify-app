const add = (a, b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should display greeting', () => {
    expect(generateGreeting('Kajal')).toBe('Hello Kajal!');
});

