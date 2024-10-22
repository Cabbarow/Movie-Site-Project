import "./App.css";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import Layout from "./components/Layout";
import Series from "./components/Series";
import SerieDetailPage from "./components/SerieDetailsPage";

const isProd = import.meta.env.PROD;
const basePath = isProd ? "/movie-site/" : "/";

console.log(isProd, "isProd");
console.log(basePath, "base path");
console.log(`${basePath}series`, "series path");

function App() {
  return (
    <>
      <BrowserRouter basename={`${basePath}`}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={`/series`} element={<Series />} />
          </Route>
          <Route path="/moviedetails/:id" element={<MovieDetailPage />} />
          <Route path="/seriedetails/:id" element={<SerieDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
