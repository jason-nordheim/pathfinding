
class Grid {
    
    /**
     * The nodes contained within the grid 
     */
    private _nodes: Array<GridNode> = new Array<GridNode>(); 
    public get nodes(){
        return this._nodes; 
    }

    /**
     * The starting node 
     */
    private _start: GridNode | null | undefined = null; 
    public get start(){
        if (!this._start) throw Error('No start node set')
        return this._start; 
    }
    public set start(sNode: GridNode){
        this._start = sNode; 
    }


    /**
     * The ending node 
     */
    private _end: GridNode | null | undefined = null;
    public get end(){
        if (!this._end) throw Error('No start node set')
        return this._end; 
    }
    public set end(sNode: GridNode){
        this._end = sNode; 
    }

    private getNodeWithShortestPath(){
        if(this._nodes.length === 0) throw new Error('No nodes on grid')

        let node = this._nodes[0]
        for(let i = 0; i < this._nodes.length; i++){
            
        }
    }

    // private findNeighbors(node:GridNode){
    //     const neighbors = new Array<GridNode>(); 
    //     if(node.position.x - 1 )
    // }

}

enum GridNodeType {
    default, 
    barrier, 
    open, 
    closed, 
    path 
}

class GridNode {

    /**
     * Position of a node on a grid 
     */
    private _position:Position | null = null 
    public get position(){
        if(!this._position) throw new Error('position is null')
        return this._position
    }
    public set position(pos:Position){
        this._position = pos
    }

    /**
     * The manhattan distance from current node 
     * back to the starting node. defaults to infinity 
     */
    
    private _distance : number = 0; 
    public get distance() : number {
        return this._distance;
    }
    public set distance(v : number) {
        this._distance = v;
    }

    // /**
    //  * The node from from which the path came from
    //  */
    // private _pathFrom: GridNode | null = null; 
    // public get pathFrom(){
    //     if(!this._pathFrom) throw new Error('pathFrom is null')
    //     return this._pathFrom; 
    // }
    // public set pathFrom(node:GridNode){
    //     this._pathFrom = node; 
    // }

    private _type: GridNodeType | null = null; 
    public get type(){
        if(!this._type) throw new Error('pathFrom is null')
        return this._type; 
    }
    public set type(type:GridNodeType){
        this._type = type;  
    }

}

class Position {
    x:number; 
    y:number; 
    constructor(x:number, y:number){
        this.x = x 
        this.y = y 
    }
}


export default function dijstra(grid: Grid) {
    const unvisitedNodes = [...grid.nodes] 
    const visitedNodes = new Array<GridNode>(); 
    while(!!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes)
    }
}

function sortNodesByDistance(nodes:Array<GridNode>){
    throw new Error('Not implemented')
}

/**
 * Gets the distance between two GridNode objects 
 * @param nodeA 
 * @param nodeB 
 */
function getDistance(nodeA:GridNode, nodeB:GridNode):number{
    const x = Math.abs(nodeA.position.x - nodeB.position.x)
    const y = Math.abs(nodeA.position.y -nodeB.position.y) 
    return x + y 
}