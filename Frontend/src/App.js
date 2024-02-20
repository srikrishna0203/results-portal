import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Summary from "./summary"
import Resp from "./resp"
import Nav from './Nav'
import Postingres from "./postingres"
import './App.css';
let App = () => {
  return (
    <div className="app-body">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/result" element={<Resp />} />
          <Route path="/add-results" element={<Postingres />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
