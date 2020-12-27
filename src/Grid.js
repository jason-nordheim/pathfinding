const { GridNode } = require("./GridNode")

class Grid {
    /**
     * Creates a grid with the specified number of rows and columns 
     * @param {number} rows 
     * @param {number} cols 
     */
    constructor(rows, cols) {
        this._end = undefined
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
    /**
     * returns the current start row and column in a single object 
     * @returns {{row: {number}, col:{ number}}}
     */
    get start() {
        return this._end
    }
    /**
     * Sets the start position for the Grid 
     * @param {number} row 
     * @param {number} col 
     */

    set start({ row, col }) {
        this.validateGridPos(row, col)

        /* unset start position if there is one */
        if (this._end) {
            const p = this.pos(this._end.row, this._end.col)
            this._nodes[p].type = 'open'
        }

        const p = this.pos(row, col)
        this._nodes[p].type = 'start'

        this._end = { row, col }
    }

    get end() {
        return this._end
    }
    /**
     * Sets the end position for the Grid 
     * @param {number} row 
     * @param {number} col 
     */
    set end({ row, col }) {
        this.validateGridPos(row, col)

        /* unset start position if there is one */
        if (this._end) {
            const p = this.pos(this._end.row, this._end.col)
            this._nodes[p].type = 'open'
        }

        const p = this.pos(row, col)
        this._nodes[p].type = 'end'

        this._end = { row, col }
    }

    /**
     * returns the number of rows on the grid 
     * @returns {number} rows
     */
    get rows() {
        return this._rows
    }

    /**
     * returns the number of columns on the grid 
     * @returns {number} cols 
     */
    get cols() {
        return this._cols
    }

    /**
     * returns a string representing the key position of a desired node 
     * @param {number} row 
     * @param {number} col 
     * @returns {string} key 
     */
    pos(row, col) {
        return `${row},${col}`
    }

    /**
     * adds a wall to the position provided 
     * @param {{row: {number}, col:{number}}} position 
     * @returns {boolean} successfully set 
     */
    addWall({ row, col }) {
        const n = this.getNode(row, col)
        if (n.type !== 'start' && n.type !== 'end') {
            n.type = 'wall'
            return true // removal successful 
        }
        return false // removal failed 
    }

    /**
     * removes a wall from the specified position 
     * @param {{row: {number}, col:{number}}} param0 
     * @returns {boolean} successfully removed 
     */
    removeWall({ row, col }) {
        const n = this.getNode(row, col)
        if (n.type !== 'start' && n.type !== 'end') {
            n.type = 'open'
            return true // removal successful 
        }
        return false // removal failed 
    }

    /**
     * checks to see if the provided row value is valid 
     * @param {number} r (row) 
     */
    isValidRow(r) {
        if (r < 1 || r > this.rows)
            return false
        return true
    }

    /**
     * checks to see if the provided column value is valid 
     * @param {number} c (column) 
     */
    isValidCol(c) {
        if (c < 1 || c > this.cols)
            return false
        return true
    }

    // isValidGridPos(row, col) {
    //     return this.isValidRow(row) && this.isValidCol(col)
    // }
    validateGridPos(row, col) {
        if (!this.isValidRow(row))
            throw 'row value is outside of grid'
        if (!this.isValidCol(col))
            throw 'col value is outside of grid'
    }

    /**
     * validates row position (will throw if invalid) 
     * and returns the GridNode at the specified position 
     * @param {number} row 
     * @param {number} col 
     * @returns {GridNode | null} node | null if invalid Grid position
     */
    getNode(row, col, throwOnError = true) {
        // by default will throw error if row is invalid 
        if (throwOnError) {
            this.validateGridPos(row, col)
            const p = this.pos(row, col)
            return this._nodes[p]
        }
        // if throw on error is set to false, will return a 
        // null object instead of a node for an invalid position 
        if (this.isValidRow(row) && this.isValidCol(col)) {
            const p = this.pos(row, col)
            return this._nodes[p]
        } else return null
    }

    /**
     * Returns the adjacent nodes for the provided coordinates 
     * @param {Grid} grid 
     * @param {number} row 
     * @param {number} col 
     * @returns {GridNode[]} [northNode, eastNode, southNode, westNode]
     */
    getNeighbors(row, col) {
        const north = this.getNorth(row, col)
        const south = this.getSouth(row, col)
        const east = this.getEast(row, col)
        const west = this.getWest(row, col)

        return [north, south, east, west]
    }

    /**
     * returns the node directly above the node at the row and colum provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode|null}
     */
    getNorth(row, col) {
        const n = this.getNode(row + 1, col, false)
        return n

    }


    /**
     * returns the node directly to the right of the node row and column provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode}
     */
    getEast(row, col) {
        const n = this.getNode(row, col + 1, false)
        return n
    }


    /**
     * returns the node directly below the node at the row and colum provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode|null}
     */
    getSouth(row, col) {
        const n = this.getNode(row - 1, col, false)
        return n
    }



    /**
     * returns the node directly to the left of the node row and column provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode|null}
     */
    getWest(row, col) {
        const n = this.getNode(row, col - 1, false)
        return n
    }

}
exports.Grid = Grid
