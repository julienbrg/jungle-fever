import Homepage from "./components/Homepage";
import Play from "./components/Play";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Index() {

  return (
    <Router basename={'/'}>
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/play" element={<Play />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>

  );
}

export default Index;