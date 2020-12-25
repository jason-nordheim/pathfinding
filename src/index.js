var assert = require('assert')


class GridNode {
    constructor(row, col, type = 'open') {
        this._row = row
        this._col = col
        this._type = type
        this._start_dist = Infinity
        this._end_dist = Infinity
    }
    get start_dist() {
        return this._start_dist
    }
    set start_dist(n) {
        if (typeof (n) !== 'number') throw 'distance must be a number'
        this._start_dist = n
    }
    get end_dist() {
        return this._end_dist
    }
    set end_dist(n) {
        if (typeof (n) !== 'number') throw 'distance must be a number'
        this._end_dist = n
    }
    get distance() {
        return { start: this._start_dist, end: this._end_dist }
    }
    get row() {
        return this._row
    }
    get col() {
        return this._col
    }
    get type() {
        return this._type
    }
    set type(t) {
        if (t == 'start') {
            this._type = t
            this._start_dist = 0
            this._end_dist = Infinity
        } else if (t == 'end') {
            this._type = t
            this._start_dist = Infinity
            this._end_dist = 0
        } else if (t == 'open') {
            this._type = t
        } else if (t == 'wall') {
            this._type = 'wall'
        } else throw 'Invalid type'
    }

    get pos() {
        return { row: this.row, col: this.col }
    }

}

class Grid {
    constructor(rows, cols) {
        this._start = undefined
        this._end = undefined
        this._rows = rows
        this._cols = cols
        this._nodes = {}
        for (let row = 1; row < rows + 1; row++) {
            for (let col = 1; col < cols + 1; col++) {
                const n = new GridNode(row, col)
                const p = this.pos(row, col)
                this._nodes[p] = n
            }
        }
    }
    get start() {
        return this._start
    }

    set start({ row, col }) {
        if (row > this.rows || row < 0) throw 'Invalid row value for start position'
        else if (col > this.cols || col < 0) throw 'Invalid column value for start position'

        /* unset start position if there is one */
        if (this._start) {
            const p = this.pos(row, col)
            this._nodes[p].type = 'start'
        }

        this._start = { row, col }
    }

    get end() {
        return this._end
    }

    set end({ row, col }) {
        if (row > this.rows || row < 0) throw 'Invalid row value for start position'
        else if (col > this.cols || col < 0) throw 'Invalid column value for start position'
        else if (this._start && this._start.row === row && this._start.col === col) throw 'end cannot have the same position as the start position'

        /* unset start position if there is one */
        if (this._end) {
            const p = this.pos(row, col)
            this._nodes[p].type = 'end'
        }

        this._end = { row, col }
    }

    get rows() {
        return this._rows
    }

    get cols() {
        return this._cols
    }

    pos(row, col) {
        return `${row},${col}`
    }

    addWall({ row, col }) {
        this.validateGridPos(row, col)
        const p = this.pos(row, col)
        this._nodes[p].type = 'wall'
    }

    removeWall({ row, col }) {
        this.validateGridPos(row, col)
        const p = this.pos(row, col)
        this._nodes[p].type = 'open'
    }

    isValidRow(r) {
        if (r < 1 || r > this.rows) return false
        return true
    }

    isValidCol(c) {
        if (c < 1 || c > this.cols) return false
        return true
    }

    // isValidGridPos(row, col) {
    //     return this.isValidRow(row) && this.isValidCol(col)
    // }

    validateGridPos(row, col) {
        if (!this.isValidRow(row)) throw 'row value is outside of grid'
        if (!this.isValidCol(col)) throw 'col value is outside of grid'
    }

    getNode(row, col) {
        this.validateGridPos()

        const p = this.pos(row, col)
        return this._nodes[p]
    }
}


/**
 * Returns the adjacent nodes for the provided coordinates 
 * @param {Grid} grid 
 * @param {number} row 
 * @param {number} col 
 * @returns {GridNode[]} [northNode, eastNode, southNode, westNode]
 */
function getNeighbors(grid, row, col) {
    throw 'not implemented exception'
}

/**
 * returns the node directly above the node at the row and colum provided 
 * @param {Grid} grid 
 * @param {number} row 
 * @param {number} col 
 * @return {GridNode}
 */
function getNorth(grid, row, col) {
    throw 'not implemented exception'
}


/**
 * returns the node directly to the right of the node row and column provided 
 * @param {Grid} grid 
 * @param {number} row 
 * @param {number} col 
 * @return {GridNode}
 */
function getEast(grid, row, col) {
    throw 'not implemented exception'
}


/**
 * returns the node directly below the node at the row and colum provided 
 * @param {Grid} grid 
 * @param {number} row 
 * @param {number} col 
 * @return {GridNode}
 */
function getSouth(grid, row, col) {
    throw 'not implemented exception'
}




/**
 * returns the node directly to the left of the node row and column provided 
 * @param {Grid} grid 
 * @param {number} row 
 * @param {number} col 
 * @return {GridNode}
 */
function getWest(grid, row, col) {
    throw 'not implemented exception'
}









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