const { GridNode } = require("./GridNode")
const { GridPosition } = require("./GridPosition")

class Grid {
    /**
     * Creates a grid with the specified number of rows and columns 
     * @param {number} rows 
     * @param {number} cols 
     */
    constructor(rows, cols) {
        this._end = undefined
        this._start = undefined
        this._rows = rows
        this._cols = cols
        this._nodes = {}
        for (let row = 1; row < rows + 1; row++) {
            for (let col = 1; col < cols + 1; col++) {
                const p = new GridPosition(row, col)
                const n = new GridNode(p)
                this._nodes[p] = n
            }
        }
    }
    /**
     * returns the current start row and column in a single object 
     * @returns {GridPosition|undefined}
     */
    get end() {
        return this._end
    }
    /**
     * Sets the end position for the Grid 
     * @param {GridPosition} pos 
     */
    set end(pos) {
        this.validateGridPos(pos.row, pos.col)

        /* unset end position if there is one */
        if (this._end) {
            this._nodes[this._end.key].type = 'open'
        }

        /**  apply end */
        this._end = pos
        this._nodes[pos.key].type = 'end'
    }

    /**
     * gets the start position of the grid 
     * @returns {GridPosition|undefined}
     * @returns {void}
     */
    get start() {
        return this._start
    }
    /**
     * Sets the start position for the Grid 
     * @param {GridPosition} pos 
     * @returns {void}
     */
    set start(pos) {
        this.validateGridPos(pos.row, pos.col)

        /* unset end position if there is one */
        if (this._start) {
            this._nodes[this._start.key].type = 'open'
        }

        /**  apply end */
        this._start = pos
        this._nodes[pos.key].type = 'start'
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
     * adds a wall to the position provided 
     * @param {GridPosition} position 
     * @returns {boolean} successfully set 
     */
    addWall(pos) {
        const n = this.getNode(pos)
        if (n.type !== 'start' && n.type !== 'end') {
            n.type = 'wall'
            return true // removal successful 
        }
        return false // removal failed 
    }

    /**
     * removes a wall from the specified position 
     * @param {GridPosition} pos 
     * @returns {boolean} successfully removed 
     */
    removeWall(pos) {
        const n = this.getNode(pos)
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
    /**
     * checks the provided position and 
     * throws an error if the position is invalid
     * @param {GridPosition} pos 
     */
    validateGridPos(pos) {
        if (!this.isValidRow(pos.row))
            throw 'row value is outside of grid'
        if (!this.isValidCol(pos.col))
            throw 'col value is outside of grid'
    }

    /**
     * validates row position (will throw if invalid) 
     * and returns the GridNode at the specified position 
     * @param {GridPosition} pos
     * @param {boolean} throwOnError
     * @returns {GridNode | null} node | null if invalid Grid position
     */
    getNode(pos, throwOnError = true) {
        // by default will throw error if row is invalid 
        if (throwOnError) {
            this.validateGridPos(pos)
            return this._nodes[pos.key]
        }
        // if throw on error is set to false, will return a 
        // null object instead of a node for an invalid position 
        if (this.isValidRow(pos.row) && this.isValidCol(pos.col)) {
            return this._nodes[pos.key]
        } else return null
    }

    /**
     * Returns the adjacent nodes for the provided coordinates 
     * @param {GridPosition} pos 
     * @returns {GridNode[]} [northNode, eastNode, southNode, westNode]
     */
    getNeighbors(pos) {
        const north = this.getNorth(pos)
        const south = this.getSouth(pos)
        const east = this.getEast(pos)
        const west = this.getWest(pos)

        return [north, south, east, west]
    }

    /**
     * returns the node directly above the node at the row and colum provided 
     * @param {GridPosition} pos 
     * @return {GridNode|null}
     */
    getNorth(pos) {
        const p = new GridPosition(pos.row + 1, pos.col)
        const n = this.getNode(p, false)
        return n
    }


    /**
     * returns the node directly to the right of the node row and column provided 
     * @param {GridPosition} pos 
     * @return {GridNode}
     */
    getEast(pos) {
        const p = new GridPosition(pos.row, pos.col + 1)
        const n = this.getNode(p, false)
        return n
    }


    /**
     * returns the node directly below the node at the row and colum provided 
     * @param {GridPosition} pos 
     * @return {GridNode|null}
     */
    getSouth(pos) {
        const p = new GridPosition(pos.row - 1, pos.col + 1)
        const n = this.getNode(p, false)
        return n
    }



    /**
     * returns the node directly to the left of the node row and column provided 
     * @param {GridPosition} pos 
     * @return {GridNode|null}
     */
    getWest(pos) {
        const p = new GridPosition(pos.row, pos.col - 1)
        const n = this.getNode(p, false)
        return n
    }

}
exports.Grid = Grid
