
export class Grid {
    constructor(rows:number, columns:number){
        if(rows < 2) throw Error('rows must be greater than: 2')
        if(columns < 2) throw Error('columns must be greater than: 2')
        this._rows = Math.floor(rows)
        this._columns = Math.floor(columns) 
        this._start = null; 
        this._end = null;
        this._visited = new Array<GridNode>() 
        this._unvisited = new Array<GridNode>() 
        this.buildGrid(this.rows, this.columns)
    }
    protected buildGrid(rows:number, columns:number): void {
        let x= 0, y = 0;
        while(x < rows){
            while(y < columns){
                this._nodes[x][y] = new GridNode(x, y, this.rows, this.columns) 
                this._unvisited.push(this._nodes[x][y])
                y++; 
            }
            x++; 
        }
    }
    protected reset() {
        this._visited = new Array<GridNode>() 
        this._unvisited = new Array<GridNode>() 
        this.buildGrid(this.rows, this.columns)
    }

    protected _visited:Array<GridNode>
    protected get visited(){
        return this._visited
    }
    protected _unvisited: Array<GridNode> 
    protected get unvisited(){
        return this._unvisited
    }
    protected _rows:number
    public get rows():number{
        return this._rows 
    }
    protected _columns:number 
    public get columns():number{
        return this._columns
    }

    protected _nodes: Array<Array<GridNode>> = new  Array<Array<GridNode>>(); 
    public get nodes(){
        return this._nodes; 
    }
    protected get arrayNodes(){
        const flattenedNodeList = new Array<GridNode>() 
        for (let x = 0; x < this.nodes.length; x++) {
            for (let y = 0; y < this.nodes[x].length; y++) {
                const node = this.nodes[x][y];
            }
        }
        return flattenedNodeList
    } 

    protected _start: GridNode | null 
    public get start(){
        if (!this._start) throw Error('start node is null')
        return this._start; 
    }
    public set start(start: GridNode){
        this._nodes[start.position.x]
        this._start = start; 
    }

    protected _end: GridNode | null
    public get end(){
        if (!this._end) throw Error('end node is null')
        return this._end; 
    }
    public set end(sNode: GridNode){
        this._end = sNode; 
    }

    public getNeighbors(node:GridNode) : Array<GridNode>  {
        const x = node.x, y = node.y
        const neighbors = new Array<GridNode>(); 
        if (x + 1 < this.rows  && this.nodes[x][y]) {

        }
        return neighbors; 
    }

    protected distanceBetween(nodeA:GridNode, nodeB:GridNode):number {
        if(nodeA.x === nodeB.x && nodeB.y === nodeB.y) return 0 
        const x = Math.abs(nodeA.x - nodeB.x)
        const y = Math.abs(nodeA.y -nodeB.y) 
        return x + y 
    }

    protected sortUnvisited(nodes:Array<Array<GridNode>>, start:GridNode, end:GridNode){

    }

    protected dijstra() {
        while(!!this._unvisited.length){
            sortNodesByDistance(this.unvisitedNodes, grid.start, grid.end)
        }
    }
    
}

enum GridNodeType {
    default, 
    barrier, 
    open, 
    weighted, 
    closed, 
    path 
}

class GridPosition {
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

class GridNode extends GridPosition {
    constructor(row:number, col:number, totalRows:number, totalColumns: number, weight?: number){
        if(row >= totalRows) throw new Error('row number cannot exceed total rows')
        if(col >= totalColumns) throw new Error('columns number cannot exceed total columns')
        super(row, col)
        this._startDistance = Infinity; 
        this._endDistance = Infinity; 
        this._type = GridNodeType.default; 
        this._visits = 0; 
        this._weight = weight ? weight : 1; 
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

    protected _visits : number;
    public get visits() : number {
        return this._visits;
    }
    public visit(){
        return this._visits++ 
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





class DomGrid extends Grid {
    constructor(element:HTMLElement, rows:number, columns:number){
        super(rows, columns)
        this._element = element; 
    }
    private _element:HTMLElement 
    public get element() : HTMLElement {
        return this._element
    }

    protected buildGrid(rows:number, columns:number): void {
        let x= 0, y = 0;
        while(x < rows){
            while(y < columns){
                this._nodes[x][y] = new DomGridNode(this.element, x, y) 
                y++; 
            }
            x++; 
        }
    }
}

class DomGridNode extends GridNode {
    constructor(parent:HTMLElement, row:number, col:number, weight?: number){
        super(row, col, weight) 
        const self = document.createElement('div')
        self.classList.add('node')
        parent.appendChild(self) 
        this._element = self 
    }
    
    protected _element: HTMLElement 
    protected get element(): HTMLElement {
        return this._element; 
    }
    protected set element(ele:HTMLElement): HTMLElement {
        this._element = ele
    }
}