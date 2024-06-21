import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import { FaCheckCircle } from "react-icons/fa"; // chec
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
    const badges = colors.map((color) => {
        return (
            <>
                <Badge key={color} color={color}>
                    test
                </Badge>
                <Badge key={`${color}-pill`} color={color} shape="pill">
                    test
                </Badge>
            </>
        );
    });

    const banners = ["info", "success", "error", "warn"].map(type => {
      return (
        <>
          <Banner type={type}/>
          <Banner type={type}>Just a test</Banner>
          <Banner type={type}>
            <Banner.Icon colorClass={'info'} icon={type}/>
            <Banner.Heading colorClass={type}>Custom Headings</Banner.Heading>
            <Banner.Description colorClass={type}>some text about the banner</Banner.Description>
          </Banner>
        </>
      )
    })
    return (
        <>
            <h1>Your components go here</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "1em",
                }}
            >
                {badges}
            </div>

           {banners}
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
