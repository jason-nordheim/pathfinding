export var GridNodeType;
(function (GridNodeType) {
    GridNodeType[GridNodeType["default"] = 0] = "default";
    GridNodeType[GridNodeType["barrier"] = 1] = "barrier";
    GridNodeType[GridNodeType["open"] = 2] = "open";
    GridNodeType[GridNodeType["weighted"] = 3] = "weighted";
    GridNodeType[GridNodeType["closed"] = 4] = "closed";
    GridNodeType[GridNodeType["path"] = 5] = "path";
})(GridNodeType || (GridNodeType = {}));
