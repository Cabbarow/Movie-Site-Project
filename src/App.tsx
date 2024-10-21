import "./App.css";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import Layout from "./components/Layout";
import Series from "./components/Series";
import SerieDetailPage from "./components/SerieDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/series" element={<Series />} />
          </Route>
          <Route path="/moviedetails/:id" element={<MovieDetailPage />} />
          <Route path="/seriedetails/:id" element={<SerieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
