import { GridNodeType } from "./GridNodeTypes";
import { GridPosition } from "./GridPosition";

export class GridNode extends GridPosition {
    constructor(row:number, col:number, totalRows:number, totalColumns: number, weight?: number){
        if(row >= totalRows) throw new Error('row number cannot exceed total rows')
        if(col >= totalColumns) throw new Error('columns number cannot exceed total columns')
        super(row, col)
        this._startDistance = Infinity; 
        this._endDistance = Infinity; 
        this._type = GridNodeType.default; 
        this._visited = false; 
        this._weight = weight ? weight : 1; 
    }
    
    public reset(){
        this._startDistance = Infinity; 
        this._endDistance = Infinity; 
        this._type = GridNodeType.default; 
        this._visited = false; 
    }

    public get distance() : number {
        return this.startDistance + this.endDistance; 
    }

    protected _startDistance: number 
    public get startDistance(): number {
        return this._startDistance; 
    }
    public set startDistance(distance:number){
        this.startDistance = distance; 
    }
    
    protected _endDistance : number 
    public get endDistance() : number {
        return this._endDistance;
    }
    public set endDistance(distance : number) {
        this._endDistance = distance;
    }

    protected _weight: number; 
    public get weight() : number {
        return this._weight; 
    }
    
    public get weightedDistance():number {
        return this._weight * this.distance; 
    }

    protected _visited : boolean;
    public get visited() : boolean {
        return this._visited;
    }
    public visit(){
        return this._visited = true  
    }

    protected _type: GridNodeType; 
    public get type(){
        if(!this._type) throw new Error('pathFrom is null')
        return this._type; 
    }
    public set type(type:GridNodeType){
        this._type = type;  
    }
}