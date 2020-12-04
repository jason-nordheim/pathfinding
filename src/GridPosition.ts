export class GridPosition {
    constructor(x:number, y:number){
        this._x = x 
        this._y = y 
    }
    protected _x:number; 
    public get x() : number {
        return this._x
    }
    
    protected _y:number; 
    public get y() : number {
        return this._y; 
    }
}