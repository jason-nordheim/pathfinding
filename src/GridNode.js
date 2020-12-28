const { GridPosition } = require("./GridPosition")

class GridNode {
    /**
     * @param {GridPosition} pos 
     * @param {string} type 
     */
    constructor(pos, type = 'open') {
        this._pos = pos
        this._type = type
        this._start_dist = Infinity
        this._end_dist = Infinity
    }
    /**
     * @returns {number} distance to start node from current node 
     */
    get start_dist() {
        return this._start_dist
    }
    /**
     * sets the distance to the start node 
     * @param {number} n 
     */
    set start_dist(n) {
        if (typeof (n) !== 'number')
            throw 'distance must be a number'
        this._start_dist = n
    }
    /**
     * @returns {number} distance to end node from current node 
     */
    get end_dist() {
        return this._end_dist
    }
    /**
     * sets the distance from the current node to the target/end node 
     * @param {number} n 
     */
    set end_dist(n) {
        if (typeof (n) !== 'number')
            throw 'distance must be a number'
        this._end_dist = n
    }
    /**
     * return an object with the distance from the start node as 
     * well as a distance from the end node 
     * @returns {{start:{number}, end:{number}}}
     */
    get distance() {
        return { start: this._start_dist, end: this._end_dist }
    }
    /**
     * row placement of node 
     */
    get row() {
        return this._row
    }
    /**
     * column placement of node 
     */
    get col() {
        return this._col
    }
    /**
     * type of node 
     * @returns {string} type of node 
     */
    get type() {
        return this._type
    }
    /**
     * Sets the type of GridNode as a string 
     * @param {'start'|'end'|'open'|'wall'} type 
     */
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
        } else
            throw 'Invalid type'
    }

    /**
     * @returns {GridPosition}
     */
    get pos() {
        return this._pos
    }
    /**
     * @returns {string} key
     */
    get key() {
        return this._pos.key
    }
}
exports.GridNode = GridNode
