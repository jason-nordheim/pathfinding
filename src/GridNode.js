const { GridPosition } = require("./GridPosition")

class GridNode {
    static Types = ['start', 'end', 'open', 'wall']
    /**
     * @param {GridPosition} pos 
     * @param {string} type 
     * @param {number} distance
     * @param {GridNode} from 
     */
    constructor(pos, type = 'open', distance = undefined, from = undefined) {
        if (!pos) throw 'must have position'
        if (!pos.col || !pos.row) throw 'invalid position'

        // default properties 
        this._from = from
        this._distance = distance
        this._type = type
        this._pos = pos

        if (type === 'open' || type === 'end' && !distance) {
            distance = Infinity
        } else if (type === 'start') {
            distance = 0
        }
        // apply mutations 
        this.type = type
        this.setPath(distance, from)
    }
    /**
     * distance from start node 
     */
    get distance() {
        return this._distance
    }
    get from() {
        return this._from
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
     * @param {string} type 
     */
    set type(t) {
        if (t == 'start') {
            this._type = t
        } else if (t == 'end') {
            this._type = t
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
     * Defines a path to get back to start 
     * @param {number} distance 
     * @param {GridNode} from 
     */
    setPath(distance, from) {
        if (from && this.type == 'start' && distance !== 0)
            throw 'start nodes must always have a distance of 0'
        if (distance && (typeof (distance) !== 'number' || distance < 0))
            throw 'distance must be a positive number'
        if (from && distance === 0)
            throw 'distance cannot be 0 for a defined path'

        this._distance = distance
        this._from = from ? from : this._from
    }
}
exports.GridNode = GridNode
