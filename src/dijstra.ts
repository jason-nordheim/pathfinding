




















// class DomGrid extends Grid {
//     constructor(element:HTMLElement, rows:number, columns:number){
//         super(rows, columns)
//         this._element = element; 
//     }
//     private _element:HTMLElement 
//     public get element() : HTMLElement {
//         return this._element
//     }

//     protected buildGrid(rows:number, columns:number): void {
//         let x= 0, y = 0;
//         while(x < rows){
//             while(y < columns){
//                 this._nodes[x][y] = new DomGridNode(this.element, x, y) 
//                 y++; 
//             }
//             x++; 
//         }
//     }
// }

// class DomGridNode extends GridNode {
//     constructor(parent:HTMLElement, row:number, col:number, weight?: number){
//         super(row, col, weight) 
//         const self = document.createElement('div')
//         self.classList.add('node')
//         parent.appendChild(self) 
//         this._element = self 
//     }
    
//     protected _element: HTMLElement 
//     protected get element(): HTMLElement {
//         return this._element; 
//     }
//     protected set element(ele:HTMLElement): HTMLElement {
//         this._element = ele
//     }
// }