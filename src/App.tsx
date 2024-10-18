import "./App.css";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailPage from "./components/MovieDetailPage";
import Layout from "./components/Layout";
import Series from "./components/Series";
import SerieDetailPage from "./components/SerieDetailsPage";

//Api key: 5e03b5ba4fcb9e50d595f0243823f541
//Api okuma erişim jetonu: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTAzYjViYTRmY2I5ZTUwZDU5NWYwMjQzODIzZjU0MSIsIm5iZiI6MTcyODQyMTYyNi4xMjYxMjMsInN1YiI6IjY3MDU5YzcxYWJmOGVkODU2NTc3ODk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LxtC7X-LG6ol5lSZw1pTgoDkz_2VKkUIF6U6ATd7aS4

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
