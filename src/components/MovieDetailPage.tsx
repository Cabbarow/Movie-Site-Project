import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context";
import { MainUrl } from "../constant";
import { Typography } from "@mui/material";
import RatingTag from "./RatingTag";

const MovieDetailPage = () => {
  const { movies } = useContext(MyContext);

  const { id } = useParams();
  const selectedMovie = movies.find(
    (selectedMovie) => selectedMovie.id === Number(id)
  );
  console.log(selectedMovie, "seçilenfilm");
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
            <span>{selectedMovie.release_date}(Release Date)</span>
          </Typography>
          <Typography>
            <span>
              {selectedMovie.original_language === "en" ? "English" : "Other"}
              (Original Language)
            </span>
          </Typography>
          <Typography>
            <span>
              {selectedMovie.popularity}
              (Popularity)
            </span>
          </Typography>
          <Typography className="!-mx-3 flex">
            <RatingTag rating={selectedMovie.vote_average} />
            <span className="mt-3 ">{`from ${selectedMovie.vote_count} vote`}</span>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
