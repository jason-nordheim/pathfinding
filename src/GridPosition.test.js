const { GridPosition } = require("./GridPosition")

describe('constructs GridPosition correctly', () => {
    test('GridPosition is a class', () => {
        expect(GridPosition).toBeDefined()
    })
    const row = 10, col = 12
    let pos = undefined
    test(`can create a GridPosition at position ${row},${col}`, () => {
        pos = new GridPosition(row, col)
        expect(pos).toBeDefined()
    })
    test('row is defined', () => {
        expect(pos.col).toBeDefined()
    })
    test('col is defined', () => {
        expect(pos.row).toBeDefined()
    })
    test('mutating position column throws error', () => {
        expect(() => pos.col = 12).toThrow()
    })
    test('mutating position row throws error', () => {

        expect(() => pos.row = 4).toThrow()
    })
})