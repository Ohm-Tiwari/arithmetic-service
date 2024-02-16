const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

    test('2099999999999999999 + 30000000000000 is equal to 2.10003e+18', () => {
        expect(add(2099999999999999999,30000000000000)).toBe(2.10003e+18);
    });

    test('20 + 4 is equal to 24', () => {
        expect(add(20,4)).toBe(24);
    });