import "../App.css";
import "../index.css";

import { useContext } from "react";
import { MyContext } from "../context";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

//Api key: 5e03b5ba4fcb9e50d595f0243823f541
//Api okuma erişim jetonu: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTAzYjViYTRmY2I5ZTUwZDU5NWYwMjQzODIzZjU0MSIsIm5iZiI6MTcyODQyMTYyNi4xMjYxMjMsInN1YiI6IjY3MDU5YzcxYWJmOGVkODU2NTc3ODk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LxtC7X-LG6ol5lSZw1pTgoDkz_2VKkUIF6U6ATd7aS4

function Series() {
  const { series, addMoreSeries } = useContext(MyContext);
  const handleClick = () => {
    addMoreSeries();
  };

  return (
    <>
      <div className="w-screen h-full p-5">
        <div className="max-[480px]:px-1 px-16">
          <h1 className="px-3 py-2 text-[#61697f] font-extrabold text-2xl">
            Series<span className="text-sm font-light"> ({series.length})</span>
          </h1>
        </div>

        <div className="w-full h-full grid max-[480px]:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 px-16">
          {series.map((serie) => {
            return (
              <Link key={serie.id} to={`/seriedetails/${serie.id}`}>
                <Card key={serie.id} movie={serie} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="grid items-center justify-center rounded-lg ">
        <Button
          onClick={handleClick}
          sx={{ color: "#61697f", paddingX: "20px" }}
        >
          Daha fazla göster
        </Button>
      </div>
    </>
  );
}

export default Series;
