const { GridNode } = require("./GridNode")
const { GridPosition } = require("./GridPosition")

describe('GridNode', () => {
    test('is defined', () => {
        expect(GridNode).toBeDefined()
    })
    describe('throws if constructed', () => {
        test('without parameters', () => {
            expect(() => {
                const n = new GridNode()
            }).toThrow()
        })
        test('without GridPosition', () => {
            expect(() => {
                const n = new GridNode(null, 'open')
            }).toThrow()
        })
    })
    describe('does NOT throw if constructed ', () => {
        describe('with single paramter `GridPosition(10, 15)`', () => {
            const gp = new GridPosition(10, 15)
            expect(() => new GridNode(gp)).not.toThrow()

            const n = new GridNode(gp)
            describe('has`.from` property', () => {
                test('defined', () => {
                    expect(n).toHaveProperty('from')
                    expect(n.distance).toBeDefined()
                    expect(n.distance).toBeTruthy() // should be infinity 
                })
                test('is "Infinity" by default', () => {
                    expect(n.distance).toBe(Infinity)
                })
            })
            describe('has`.distance` property', () => {
                test('defined', () => {
                    expect(n).toHaveProperty('distance')
                    expect(n.distance).toBeDefined()
                    expect(n.distance).toBeTruthy()
                })
                test('is "Infinity" by default', () => {
                    expect(n.distance).toBe(Infinity)
                })
            })
            describe('has `.type` property', () => {
                test('defined', () => {
                    expect(n).toHaveProperty('type')
                    expect(n.type).toBeDefined()
                    expect(n.type).toBeTruthy()
                })
                test('is type "open" by default', () => {
                    expect(n.type).toBe('open')
                })
            })
            describe('has `.pos` property', () => {
                test('defined', () => {
                    expect(n).toHaveProperty('pos')
                    expect(n.pos).toBeDefined()
                    expect(n.pos).toBeInstanceOf(GridPosition)
                    expect(n.pos).toBeTruthy()
                })
                test('defined with `row` property', () => {
                    expect(n.pos).toHaveProperty('row')
                    expect(n.pos.row).toBeDefined()
                    expect(n.pos.row).toBeTruthy()
                    expect(typeof (n.pos.row)).toBe('number')
                })
                test('defined with `col` property', () => {
                    expect(n.pos).toHaveProperty('col')
                    expect(n.pos.col).toBeDefined()
                    expect(n.pos.col).toBeTruthy()
                    expect(typeof (n.pos.col)).toBe('number')
                })
                test('defined with key property', () => {
                    expect(n.pos).toHaveProperty('key')
                    expect(n.pos.key).toBeDefined()
                    expect(n.pos.key).toBeTruthy()
                    expect(typeof (n.pos.key)).toBe('string')
                })
            })
        })

    })
    describe('defining start position', () => {
        const gp = new GridPosition(10, 15)
        const n = new GridNode(gp, 'start')
        test('defaults the distance to 0', () => {
            expect(n.distance).toBe(0)
        })
        test('defaults `.from` to undefined', () => {
            expect(n.from).toBeUndefined()
        })
        test('sets the type to "start"', () => {
            expect(n.type).toBe('start')
        })
    })
    describe('defining end position', () => {
        const gp = new GridPosition(10, 15)
        const n = new GridNode(gp, 'end')

        test('defaults the distance to Infinity', () => {
            expect(n.distance).toBe(Infinity)
        })
        test('sets GridNode.type to "end"', () => {
            expect(n.type).toBe('end')
        })
    })
})

