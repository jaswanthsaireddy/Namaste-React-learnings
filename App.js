const heading = React.createElement("h1",{id:"heading",abc:"jaswanth"},"Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"Im a h1 tag for child 1"),
            React.createElement("h2",{},"Im a h2 tag for child 1")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Im a h1 tag for child 2"),
            React.createElement("h2",{},"Im a h2 tag for child 2")]
    )
])

root.render(parent);