const { Grid } = require("./Grid")
const { GridNode } = require("./GridNode")

const rows = 10
const cols = 10
test(`can construct a grid with ${rows} rows and ${cols} cols`, () => {
    const g = new Grid(rows, cols)
    expect(g).toBeTruthy() // 
    expect(g).toBeInstanceOf(Grid)
    expect(g.cols).toBe(cols)
    expect(g.rows).toBe(rows)
    expect(g.start).toBeUndefined()
    expect(g.end).toBeUndefined()
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            expect(g.getNode(r, c)).toBeTruthy()
            expect(g.getNode(r, c)).toBeInstanceOf(GridNode)
            expect(g.getNode(r, c).type).toBe('open')
        }
    }
})


