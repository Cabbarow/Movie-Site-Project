import { createContext, ReactNode, useEffect, useState } from "react";

interface myDataType {
  movies: any[];
}
const MyContext = createContext<myDataType>({
  movies: [],
});

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState([]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTAzYjViYTRmY2I5ZTUwZDU5NWYwMjQzODIzZjU0MSIsIm5iZiI6MTcyODQyMTc4NS4zNzE1MTEsInN1YiI6IjY3MDU5YzcxYWJmOGVkODU2NTc3ODk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60BpdQgrLkmiwcq5tka5GIHYiyvfujjjc1Pj2EKRR48",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return <MyContext.Provider value={{ movies }}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };
