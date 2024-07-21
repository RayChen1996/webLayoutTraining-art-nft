import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import AppHeader from "./components/Layout/AppHeader";
import AppFooter from "./components/Layout/AppFooter";

export default function App() {
  return (
    <main className="bg-customGrayLight flex flex-col min-h-screen">
      <AppHeader />
      <div className=" flex-1">
        <Router>
          {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Router>
      </div>

      <AppFooter />
    </main>
  );
}
