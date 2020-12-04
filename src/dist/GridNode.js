import { GridNodeType } from "./GridNodeTypes";
import { GridPosition } from "./GridPosition";
export class GridNode extends GridPosition {
    constructor(row, col, totalRows, totalColumns, weight) {
        if (row >= totalRows)
            throw new Error('row number cannot exceed total rows');
        if (col >= totalColumns)
            throw new Error('columns number cannot exceed total columns');
        super(row, col);
        this._startDistance = Infinity;
        this._endDistance = Infinity;
        this._type = GridNodeType.default;
        this._visited = false;
        this._weight = weight ? weight : 1;
    }
    reset() {
        this._startDistance = Infinity;
        this._endDistance = Infinity;
        this._type = GridNodeType.default;
        this._visited = false;
    }
    get distance() {
        return this.startDistance + this.endDistance;
    }
    get startDistance() {
        return this._startDistance;
    }
    set startDistance(distance) {
        this.startDistance = distance;
    }
    get endDistance() {
        return this._endDistance;
    }
    set endDistance(distance) {
        this._endDistance = distance;
    }
    get weight() {
        return this._weight;
    }
    get weightedDistance() {
        return this._weight * this.distance;
    }
    get visited() {
        return this._visited;
    }
    visit() {
        return this._visited = true;
    }
    get type() {
        if (!this._type)
            throw new Error('pathFrom is null');
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
}
