
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Landing from "../pages/landing" ;
import Encounter from "../pages/encounter" ;
import About from "../pages/about"
import Team from "../pages/team"

export default function FCRouter() {

  return <>
        <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/encounter" element={<Encounter />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </Router>
    </>
}