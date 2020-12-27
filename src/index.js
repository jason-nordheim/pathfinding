var assert = require('assert')
const { Grid } = require("./Grid")
const { GridNode } = require("./GridNode")














/* Tests */
const rows = 10
const cols = 10
assert.doesNotThrow(() => {
    const grid = new Grid(rows, cols)

    /* creates the correct number of rows and columns */
    assert.strictEqual(grid.rows, rows, 'failed to create grid with the correct number of rows')
    assert.strictEqual(grid.cols, cols, 'failed to create grid with the correct number of columns')

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            assert.doesNotThrow(() => {
                /* every node can be retrieved */
                const n = grid.getNode(r, c)

                /* node is of the correct type  */
                assert.strictEqual(typeof (n), typeof (new GridNode(r, c)), 'Node is of type node')

                /* row is correct */
                assert.strictEqual(n.row, r, `Node at position ${r},${c} has the correct row value`)

                /* column is correct */
                assert.strictEqual(n.col, c, `Node at position ${r},${c} has the correct col value`)

                /* type is 'open' */
                assert.strictEqual('open', n.type, `Node at position ${r},${c} is not 'open'`)

            }, `Failed to retrieve node at position ${r},${c}`)
        }
    }

    /** requesting nodes outside of the grid throws errors  */
    assert.throws(() => {
        grid.getNode(cols + 1, rows + 1) // outside the grid rating 
        grid.getNode(0, 0) // row and column values are always positive 
    }, 'Failed to throw error when requesting node outside grid')

    /* can change a node to a start node */
    assert.doesNotThrow(() => {
        const n = grid.getNode(5, 5)
        n.type = 'start'
        assert.strictEqual(n.type, 'start')
        assert.strictEqual(n.start_dist, 0)
        assert.strictEqual(n.end_dist, Infinity)
    }, `failed to change node at position 5,5 to 'start'`)

    /* can change a node to a end node */
    assert.doesNotThrow(() => {
        const n = grid.getNode(1, 3)
        n.type = 'end'
        assert.strictEqual(n.type, 'end')
        assert.strictEqual(n.start_dist, Infinity)
        assert.strictEqual(n.end_dist, 0)
    }, `failed to change node at position 1,3 to 'end'`)
}, 'Failed to create 10 x 10 grid')