import { GridNodeType } from "./GridNodeTypes";
import { GridPosition } from "./GridPosition";
export declare class GridNode extends GridPosition {
    constructor(row: number, col: number, totalRows: number, totalColumns: number, weight?: number);
    reset(): void;
    get distance(): number;
    protected _startDistance: number;
    get startDistance(): number;
    set startDistance(distance: number);
    protected _endDistance: number;
    get endDistance(): number;
    set endDistance(distance: number);
    protected _weight: number;
    get weight(): number;
    get weightedDistance(): number;
    protected _visited: boolean;
    get visited(): boolean;
    visit(): boolean;
    protected _type: GridNodeType;
    get type(): GridNodeType;
    set type(type: GridNodeType);
}
