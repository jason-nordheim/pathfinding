const { Grid } = require("./Grid")
const { GridNode } = require("./GridNode")



describe(`Grid constructs a grid `, () => {
    describe('given valid rows and columns', () => {
        const rows = 10
        const cols = 10
        const g = new Grid(rows, cols)
        test('grid object is truthy', () => {
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
            const s = g.start
            expect(s).toBeUndefined()
        })
        test('initialized without end position', () => {
            const e = g.end
            expect(e).toBeUndefined()
        })
        test('initialized solely with GridNodes of type \'open\' GridNodes', () => {
            for (let r = 1; r < rows; r++) {
                for (let c = 1; c < cols; c++) {
                    expect(g.getNode(r, c)).toBeTruthy()
                    expect(g.getNode(r, c)).toBeInstanceOf(GridNode)
                    expect(g.getNode(r, c).type).toBe('open')
                }
            }
        })


        describe('start position can be set', () => {
            const start = { row: 8, col: 7 }
            test(`can set start position to row:${start.row} and col:${start.col}`, () => {
                const setStart = () => g.start = start
                expect('setting start does not throw error', () => {
                    setStart()
                })
            })
            test('start property is defined', () => {
                expect(g.start).toBeDefined()
            })
            test('start property has defined row attribute', () => {
                expect(g.start.row).toBeDefined()
                expect(g.start.row).toEqual(start.row)
            })
            test('start property has defined column attribute', () => {
                expect(g.start.col).toBeDefined()
                expect(g.start.col).toEqual(start.col)
            })
            describe('setting start node does not change other nodes', () => {
                for (let r = 1; r < rows; r++) {
                    for (let c = 1; c < cols; c++) {
                        test(`node at ${r},${c} is defined`, () => {
                            expect(g.getNode(r, c)).toBeTruthy()
                            expect(g.getNode(r, c)).toBeDefined()
                        })
                        const expectedType = start.row === r && start.col === c
                            ? 'start'
                            : 'open'
                        test(`node at ${r},${c} has expected type: '${expectedType}'`, () => {
                            expect(g.getNode(r, c).type).toBe(expectedType)
                        })
                    }
                }
            })
        })
    })
    // const end = { row: 2, col: 3 }
    // describe(`can set end position to row:${end.row} and col:${end.col}`, () => {
    //     g.end = end
    //     test('end property is defined', () => {
    //         expect(g.end).toBeDefined()
    //     })
    //     test('end property has defined row attribute', () => {
    //         expect(g.end.row).toBeTruthy()
    //         expect(g.end.row).toEqual(end.row)
    //     })
    //     test('end property has defined column attribute', () => {
    //         expect(g.end.row).toBeTruthy()
    //         expect(g.end.row).toEqual(end.row)
    //     })
    //     test('setting start node does not change other nodes', () => {
    //         for (let r = 1; r < rows; r++) {
    //             for (let c = 1; c < cols; c++) {
    //                 expect(g.getNode(r, c)).toBeTruthy()
    //                 if (start.row == r && start.col == c) {
    //                     expect(g.getNode(r, c).type).toEqual('start')
    //                 } else if (end.row == r && end.col == c) {
    //                     expect(g.getNode(r, c).type).toEqual('end')
    //                 } else {
    //                     expect(g.getNode(r, c).type).toEqual('open')
    //                 }
    //             }
    //         }
    //     })
    // })
})
