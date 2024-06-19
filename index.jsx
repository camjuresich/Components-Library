import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner"

function App() {
    const colors = [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
    ];
    const badges = colors.map(color => {
      return (
        <>
        <Badge color={color}>test</Badge>
        <Badge color={color} shape='pill'>test</Badge>
        </>
      )
    })
    return (
        <>
            <h1>Your components go here</h1>
            <div style={{display:'flex', flexWrap:'wrap', width: '100%', gap: '1em'}}>
              {badges}
            </div>
            <Banner/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
