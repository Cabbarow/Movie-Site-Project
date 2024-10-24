import { BiCameraMovie } from "react-icons/bi";

const MovieName = ({ movieName }: { movieName: string }) => {
  return (
    <div className="flex items-center gap-2 my-4">
      <BiCameraMovie className="text-[#FFBD6D] text-2xl" />
      <h5 aria-placeholder={movieName} className="line-clamp-1 font-semibold">
        {movieName}
      </h5>{" "}
    </div>
  );
};

export default MovieName;
