const { Grid } = require("./Grid")

describe(`Grid constructs a grid `, () => {
    describe('given valid rows and columns', () => {
        const rows = 10
        const cols = 10
        const g = new Grid(rows, cols)
        test('Grid object is truthy', () => {
            expect(g).toBeDefined()
            expect(g).toBeTruthy() // 
        })
        test('is an instance of class Grid', () => {
            expect(g).toBeInstanceOf(Grid)
        })
        test(`new Grid correct number of columns and rows`, () => {
            expect(g.cols).toBe(cols)
            expect(g.rows).toBe(rows)
        })
        test('new Grid initialized without start position', () => {
            expect(g.start).toBeFalsy()
        })
        test('initialized without end position', () => {
            expect(g.end).toBeFalsy()
        })
    })
})
