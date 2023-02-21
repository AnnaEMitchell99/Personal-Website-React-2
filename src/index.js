import { createRoot } from "react-dom/client";
import {Home, AboutMe, Portfolio} from "./Components"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index-links.css"

const MainAppElement = () => {
    return (
     <BrowserRouter>
            <nav class="links">
                <Link to="/">Home</Link>
                <br />
                <Link to="/about-me">About Me</Link>
                <br />
                <Link to="/portfolio">Portfolio</Link>
            </nav>
            <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about-me" element={<AboutMe />} />

            <Route path="/portfolio" element={<Portfolio />} />
            </Routes>

    </BrowserRouter>
    )
}

const appElement = document.getElementById("app");
const root = createRoot(appElement)

root.render(<MainAppElement />)