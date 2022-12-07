const {Person} = require('./main.js');
describe("Person Tests", () => {
    let person1 = new Person('Test1')
    let person2 = new Person('Test2')
    test("getId", () => {
        expect(person1.getId()).toBe(1);
        expect(person2.getId()).toBe(2);
    })
    test("getName", () => {
        expect(person1.getName()).toBe('Test1')
        expect(person2.getName()).toBe('Test2')
    })
    test("get name default value", () => {
        const personTestName = new Person()
        expect(personTestName.getName()).toBe('N/A')
    })
    test("getWishlist default value", () => {
        expect(person1.getWishlist()).toStrictEqual([])
    })
    test("add wislist", () => {
        person1.addWishlist('House')
        person1.addWishlist('Gold')
        person1.addWishlist('Iphone')
        person1.addWishlist('Cat')
        expect(person1.addWishlist()).toBe(undefined)
        expect(person1.getWishlist().length).toBe(4)
    })
    test("remove wishlist", () => {
        expect(person1.removeWishlist('House')).toBe('House')
        expect(person1.getWishlist().length).toBe(3)
        expect(person1.removeWishlist('HAHA')).toBe('not found to remove')
    })
    test("find wishlist", () => {
        expect(person1.findWishlist('Gold')).toStrictEqual({
            index: 0, value: 'Gold'
        })
        expect(person1.findWishlist('ASDASD')).toBe('not found')
    })
})  