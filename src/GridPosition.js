class GridPosition {
    /**
     * 
     * @param {number} row 
     * @param {number} col 
     */
    constructor(row, col) {
        if (typeof (row) !== 'number' || typeof (col) !== 'number' || row < 0 || col < 0)
            throw 'row and col must be positive numbers'
        this._row = row
        this._col = col
    }
    /**
     * @returns {number}
     */
    get row() {
        return this._row
    }
    set row(r) {
        throw 'row cannot be mutated'
    }
    /**
     * @returns {number}
     */
    get col() {
        return this._col
    }
    set col(c) {
        throw 'col cannot be mutated'
    }
    /**
     * @returns {string}
     */
    get key() {
        return `${this._row},${this._col}`
    }
}
exports.GridPosition = GridPosition

