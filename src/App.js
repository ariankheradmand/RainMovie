import Main from "./Component/Main/index"
import First from "./Pages/First/Home"
import People from "./Pages/First/People";
import People_Data from "./Pages/First/People_detail";
import Movie_detail from "./Pages/First/Movie_detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/People" element={<People />} />
      <Route path="/People/:name" element={<People_Data />} />
      <Route path="/Movie/:name" element={<Movie_detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
