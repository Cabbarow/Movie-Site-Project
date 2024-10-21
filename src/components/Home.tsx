import "../App.css";
import "../index.css";

import { useContext } from "react";
import { MyContext } from "../context";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Home() {
  const { movies, addMore, searchItem } = useContext(MyContext);

  const handleClick = () => {
    addMore();
  };

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div className="w-screen h-full p-5">
        <div className="max-[480px]:px-1 px-16">
          <h1 className="px-3 py-2 text-[#61697f] font-extrabold text-2xl">
            Movies
            <span className="text-sm font-light">
              {" "}
              ({filteredMovies.length})
            </span>
          </h1>
        </div>

        <div className="w-full h-full grid max-[480px]:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 px-16">
          {filteredMovies.map((movie) => {
            return (
              <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
                <Card key={movie.id} movie={movie} />
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

export default Home;
