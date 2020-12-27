const { GridNode } = require("./GridNode")

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
        if (row > this.rows || row < 0)
            throw 'Invalid row value for start position'
        else if (col > this.cols || col < 0)
            throw 'Invalid column value for start position'

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
        if (row > this.rows || row < 0)
            throw 'Invalid row value for start position'
        else if (col > this.cols || col < 0)
            throw 'Invalid column value for start position'
        else if (this._start && this._start.row === row && this._start.col === col)
            throw 'end cannot have the same position as the start position'

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
        if (r < 1 || r > this.rows)
            return false
        return true
    }

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

    getNode(row, col) {
        this.validateGridPos(row, col)

        const p = this.pos(row, col)
        return this._nodes[p]
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
     * @return {GridNode}
     */
    getNorth(row, col) {
        const n = this.getNode(row, col)

        throw 'not implemented exception'
    }


    /**
     * returns the node directly to the right of the node row and column provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode}
     */
    getEast(row, col) {
        const n = this.getNode(row, col)


        throw 'not implemented exception'
    }


    /**
     * returns the node directly below the node at the row and colum provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode}
     */
    getSouth(row, col) {
        const n = this.getNode(row, col)


        throw 'not implemented exception'
    }



    /**
     * returns the node directly to the left of the node row and column provided 
     * @param {number} row 
     * @param {number} col 
     * @return {GridNode}
     */
    getWest(row, col) {
        const n = this.getNode(row, col)

        throw 'not implemented exception'
    }

}
exports.Grid = Grid
