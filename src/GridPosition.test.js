const { GridPosition } = require("./GridPosition")
const { randInteger } = require("./utils/random")


describe('constructs GridPosition correctly', () => {
    test('GridPosition is a class', () => {
        expect(GridPosition).toBeDefined()
    })
    test('throws error if not passed any arguments', () => {
        expect(() => {
            const gp = new GridPosition()
        }).toThrow()
    })
    test('throws if not not passed strings for row and col', () => {
        expect(() => {
            const gp = new GridPosition('10', '10')
        }).toThrow()
        expect(() => {
            const gp = new GridPosition('joe', 'sarah')
        }).toThrow()
    })
    test('throws if passed string as column parameter', () => {
        expect(() => {
            const gp = new GridPosition(10, '10')
        }).toThrow()
    })
    test('throws if passed string as row parameter', () => {
        expect(() => {
            const gp = new GridPosition('10', 10)
        }).toThrow()
    })
    test('throws if passed array as column parameter', () => {
        expect(() => {
            const gp = new GridPosition(10, [])
        }).toThrow()
    })
    test('throws if passed array as row parameter', () => {
        expect(() => {
            const gp = new GridPosition([], 10)
        }).toThrow()
    })
    test('throws error if not provided row', () => {
        for (let i = 0; i < 10; i++) {
            // try random integers between 1 and 50 
            const testRow = randInteger(1, 50)
            expect(() => {
                const gp = new GridPosition(null, testRow)
            }).toThrow()
        }
    })
    test('throws error if not provided col', () => {
        expect(() => {
            const gp = new GridPosition(testCol)
        }).toThrow()
        // try random integers between 1 and 50 
        for (let i = 0; i < 10; i++) {
            const testCol = randInteger(1, 50)
            expect(() => {
                const gp = new GridPosition(testCol, null)
            }).toThrow()
        }
    })
    test('throws error if passed negative column', () => {
        expect(() => {
            const gp = new GridPosition(-1, 1)
        }).toThrow()
        expect(() => {
            const gp = new GridPosition(-21, 10)
        }).toThrow()
    })
    test('throws error if passed negative column', () => {
        expect(() => {
            const gp = new GridPosition(10, -1)
        }).toThrow()
        expect(() => {
            const gp = new GridPosition(1, -45)
        }).toThrow()
    })
})

describe('when initialized correctly', () => {
    const r = randInteger(1, 50), c = randInteger(1, 50)
    const gp = new GridPosition(r, c)
    test('GridNode has property `col`', () => {
        expect(gp).toHaveProperty('col')
    })
    test('GridNode has property `row`', () => {
        expect(gp).toHaveProperty('row')
    })
    test('GridNode has property key', () => {
        expect(gp).toHaveProperty('key')
    })
    test('GridNode `key` property returns a string', () => {
        expect(typeof (gp.key)).toBe('string')
    })
    test('column property is defined', () => {
        expect(gp.col).toBeDefined()
    })
    test('row property is defined', () => {
        expect(gp.row).toBeDefined()
    })
    test('column property is of type `number`', () => {
        expect(typeof (gp.col)).toBe('number')
    })
    test('row property is of type `number`', () => {
        expect(typeof (gp.row)).toBe('number')
    })
    test('row property returns the correct number', () => {
        expect(gp.row).toBe(r)
    })
    test('col property returns the correct number', () => {
        expect(gp.col).toBe(c)
    })
    test('setting `col` does not permit mutation', () => {
        expect(() => {
            gp.row = 10
        }).toThrow()
    })
    test('setting `col` does not permit mutation', () => {
        expect(() => {
            gp.col = 10
        }).toThrow()
    })
    test('key string is formatted correctly', () => {
        expect(gp.key).toBe(`${r},${c}`)
    })
})