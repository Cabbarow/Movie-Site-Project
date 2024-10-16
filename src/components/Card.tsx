import { MainUrl } from "../constant";
import MovieName from "./MovieName";
import RatingTag from "./RatingTag";

const Card = ({ movie }: { movie: any }) => {
  const url = MainUrl + movie.poster_path;

  return (
    <>
      <div className="overflow-hidden relative max-h-[480px] m-2 p-2 z-20 rounded-md bg-[#20283ECC] text-white">
        <div className="overflow-hidden rounded-md">
          <img
            src={url}
            alt={movie?.name}
            className="w-full h-full rounded-md hover:scale-[1.1] transition-transform aspect-[2/3]"
          />
        </div>

        <div className="absolute left-2 top-2 ">
          <RatingTag rating={movie?.vote_average} />
        </div>

        <MovieName movieName={movie?.title} />
      </div>
    </>
  );
};

export default Card;
