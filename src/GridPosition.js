class GridPosition {
    /**
     * 
     * @param {number} row 
     * @param {number} col 
     */
    constructor(row, col) {
        this._row = row
        this._col = col
    }
    /**
     * @returns {number}
     */
    get row() {
        return this._row
    }
    /**
     * @returns {number}
     */
    get col() {
        return this._col
    }
    /**
     * @returns {string}
     */
    get key() {
        return `${this._row},${this._col}`
    }
}
exports.GridPosition = GridPosition

