
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Landing from "../pages/landing" ;
import Encounter from "../pages/encounter" ;

export default function FCRouter() {

  return <>
        <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/encounter" element={<Encounter />}></Route>
        </Routes>
      </Router>
    </>
}