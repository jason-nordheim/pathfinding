import { GridNode } from "./GridNode";
import { GridNodeType } from "./GridNodeTypes";
export class Grid {
    constructor(rows, columns) {
        this._nodes = new Array();
        if (rows < 2)
            throw Error('rows must be greater than: 2');
        if (columns < 2)
            throw Error('columns must be greater than: 2');
        this._rows = Math.floor(rows);
        this._columns = Math.floor(columns);
        this._start = null;
        this._end = null;
        this.visited = new Array();
        this.unvisited = new Array();
        this.buildGrid(this.rows, this.columns);
    }
    buildGrid(rows, columns) {
        let x = 0, y = 0;
        while (x < rows) {
            while (y < columns) {
                this._nodes[x][y] = new GridNode(x, y, this.rows, this.columns);
                this.unvisited.push(this._nodes[x][y]);
                y++;
            }
            x++;
        }
    }
    reset() {
        this.visited = new Array();
        this.unvisited = new Array();
        this.buildGrid(this.rows, this.columns);
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    get nodes() {
        return this._nodes;
    }
    get arrayNodes() {
        const flattenedNodeList = new Array();
        for (let x = 0; x < this.nodes.length; x++) {
            for (let y = 0; y < this.nodes[x].length; y++) {
                const node = this.nodes[x][y];
            }
        }
        return flattenedNodeList;
    }
    get start() {
        if (!this._start)
            throw Error('start node is null');
        return this._start;
    }
    set start(start) {
        this._nodes[start.x][start.y] = start;
        this._start = start;
    }
    get end() {
        if (!this._end)
            throw Error('end node is null');
        return this._end;
    }
    set end(end) {
        this._nodes[end.x][end.y] = end;
        this._end = end;
    }
    getNeighbors(node) {
        const neighbors = new Array();
        const up = this.up(node);
        !!up && neighbors.push(up);
        const down = this.down(node);
        !!down && neighbors.push(down);
        const right = this.right(node);
        !!right && neighbors.push(right);
        const left = this.left(node);
        !!left && neighbors.push(left);
        return neighbors;
    }
    up(node) {
        const x = node.x + 1, y = node.y;
        if (x < this.columns && this.nodes[x][y]) {
            return this.nodes[x][y];
        }
    }
    down(node) {
        const x = node.x - 1, y = node.y;
        if (x > 0 && this.nodes[x][y]) {
            return this.nodes[x][y];
        }
    }
    right(node) {
        const x = node.x, y = node.y + 1;
        if (y < this.columns && this.nodes[x][y]) {
            return this.nodes[x][y];
        }
    }
    left(node) {
        const x = node.x, y = node.y - 1;
        if (y > 0 && this.nodes[x][y]) {
            return this.nodes[x][y];
        }
    }
    distance(nodeA, nodeB) {
        if (nodeA.x === nodeB.x && nodeB.y === nodeB.y)
            return 0;
        const x = Math.abs(nodeA.x - nodeB.x);
        const y = Math.abs(nodeA.y - nodeB.y);
        return x + y;
    }
    sort(nodes) {
        if (!this.start)
            throw new Error('start node is null');
        if (!this.end)
            throw new Error('end node is null');
        const sortedNodes = [...nodes].sort((nodeA, nodeB) => {
            const distA = this.distance(nodeA, this.start) + this.distance(nodeA, this.end);
            const distB = this.distance(nodeB, this.start) + this.distance(nodeB, this.end);
            if (distA < distB)
                return -1;
            else if (distB < distA)
                return 1;
            else
                return 0;
        });
        return sortedNodes;
    }
    visit(node) {
        const validType = node.type !== GridNodeType.barrier;
        if (node && node.visited && validType) {
            node.visit();
            this.visited.push(node);
        }
    }
    visitNeighbors(node) {
        const neighbors = this.sort(this.getNeighbors(node));
        for (const node of neighbors) {
        }
    }
    dijstra() {
        this.unvisited = this.sort(this.unvisited);
        this.visited = this.sort(this.visited);
        while (this.unvisited.length > 0) {
            const node = this.unvisited.shift();
            if (!!node) {
                this.visit(node);
                this.visitNeighbors(node);
            }
        }
    }
}
