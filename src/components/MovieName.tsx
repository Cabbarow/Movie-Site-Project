import { BiCameraMovie } from "react-icons/bi";

const MovieName = ({ movieName }: { movieName: string }) => {
  // const myData = useContext(MyContext);
  // console.log(myData, "mydatafromcard");

  return (
    <div className="flex items-center gap-2 my-4">
      <BiCameraMovie className="text-[#FFBD6D] text-2xl" />
      <h5 className="font-semibold">{movieName}</h5>{" "}
    </div>
  );
};

export default MovieName;
