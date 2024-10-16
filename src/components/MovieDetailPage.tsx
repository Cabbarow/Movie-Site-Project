import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainUrl } from "../constant";
import { Typography } from "@mui/material";
import RatingTag from "./RatingTag";
import { FaExternalLinkAlt } from "react-icons/fa";

const MovieDetailPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTAzYjViYTRmY2I5ZTUwZDU5NWYwMjQzODIzZjU0MSIsIm5iZiI6MTcyODQyMTc4NS4zNzE1MTEsInN1YiI6IjY3MDU5YzcxYWJmOGVkODU2NTc3ODk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60BpdQgrLkmiwcq5tka5GIHYiyvfujjjc1Pj2EKRR48",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          options
        );
        const data = await response.json();
        setSelectedMovie(data);
        console.log(selectedMovie);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, []);

  if (!selectedMovie) return null;
  console.log(selectedMovie);
  const url = MainUrl + selectedMovie.poster_path;
  const url2 = MainUrl + selectedMovie.backdrop_path;

  return (
    <>
      <img className="h-[500px] object-cover w-full" src={url2} alt="bg"></img>
      <div className="w-screen h-full inline sm:flex p-5">
        <div className="w-auto h-full gap-2 px-16">
          <div className="overflow-hidden relative w-80 h-auto m-2 p-2 z-20 rounded-md bg-[#20283ECC] text-white">
            <div className="overflow-hidden rounded-md">
              <img
                src={url}
                alt={selectedMovie.name}
                className="w-full h-full rounded-md hover:scale-[1.1] transition-transform"
              />
            </div>
          </div>
        </div>
        <div className="text-[#61697f] grid sm:my-3 m-3">
          <Typography className="!mb-4 ">
            <span className="gradientText2 font-extrabold text-2xl">
              {selectedMovie.original_title}
            </span>
          </Typography>
          <Typography>
            <span className="line-clamp-5"> {selectedMovie.overview}</span>
          </Typography>
          <Typography>
            <span>{selectedMovie.runtime} min.</span>
          </Typography>
          <Typography>
            <span>{selectedMovie.release_date}</span>
            <span style={{ opacity: "0.5" }}>(Release Date)</span>
          </Typography>
          <Typography>
            <span>{selectedMovie.original_language.toUpperCase()}</span>
            <span style={{ opacity: "0.5" }}>(Original Language)</span>
          </Typography>
          <Typography>
            {selectedMovie.genres.map((genre: any) => (
              <span key={genre.name}>{genre.name} </span>
            ))}
            <span style={{ opacity: "0.5" }}>(Genres)</span>
          </Typography>
          <Typography>
            <span>{selectedMovie.popularity}</span>
            <span style={{ opacity: "0.5" }}>(Popularity)</span>
          </Typography>
          <Typography>
            <a
              href={selectedMovie.homepage}
              style={{ display: "flex", gap: "10px", alignContent: "center" }}
              target="_blank"
            >
              <FaExternalLinkAlt style={{ marginTop: "2px" }} /> Home Page
            </a>
          </Typography>
          <Typography className="!-mx-3 flex">
            <RatingTag rating={selectedMovie.vote_average} />
            <span
              className="mt-3 "
              style={{ opacity: "0.5" }}
            >{`from ${selectedMovie.vote_count} vote`}</span>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
