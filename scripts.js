var $ = go.GraphObject.make;

var myDiagram =
    $(go.Diagram, "myDiagramDiv",
        {
            "undoManager.isEnabled": true,
            layout: $(go.TreeLayout,
                {angle: 90, layerSpacing: 35})
        });

myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",
        {background: "#44CCFF"},
        $(go.Picture,
            {margin: 10, width: 50, height: 50, background: "red"},
            new go.Binding("source")),
        $(go.TextBlock, "Default Text",
            {margin: 12, stroke: "white", font: "bold 16px sans-serif"},
            new go.Binding("text", "name"))
    );

myDiagram.linkTemplate =
    $(go.Link,
        {routing: go.Link.Orthogonal, corner: 5},
        $(go.Shape, {strokeWidth: 3, stroke: "#555"}));

var model = $(go.TreeModel);
//
model.nodeDataArray = [
    {key: "1", name: "Shirazion", source: "cat1.png"},
    {key: "2", parent: "1", name: "Piso", source: "cat2.png"},
    {key: "3", parent: "1", name: "Susik", source: "cat3.png"},
    {key: "4", parent: "3", name: "Nane", source: "cat4.png"},
    {key: "5", parent: "3", name: "Elya", source: "cat5.png"},
    {key: "6", parent: "2", name: "Karine", source: "cat6.png"}
];
//
myDiagram.model = model;