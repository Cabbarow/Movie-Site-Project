import { createContext, ReactNode, useEffect, useState } from "react";

interface myDataType {
  movies: any[];
}
const MyContext = createContext<myDataType>({
  movies: [],
});

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const addMore = () => {
    if (page < 30) {
      setPage(page + 1);
    } else {
      return page;
    }
  };

  useEffect(() => {
    if (page && !loading) {
      setLoading(true);
      const fetchMovies = async () => {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTAzYjViYTRmY2I5ZTUwZDU5NWYwMjQzODIzZjU0MSIsIm5iZiI6MTcyODQyMTc4NS4zNzE1MTEsInN1YiI6IjY3MDU5YzcxYWJmOGVkODU2NTc3ODk2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60BpdQgrLkmiwcq5tka5GIHYiyvfujjjc1Pj2EKRR48",
          },
        });

        return response.json();
      };

      fetchMovies()
        .then((response) => {
          console.log(response);

          setMovies((prev) => {
            if (prev.length > 0) return [...prev, ...response.results];
            else return response.results;
          });
        })
        .catch((err) => console.log("error mq", err))
        .finally(() => setLoading(false));
    }
  }, [page]);

  return (
    <MyContext.Provider value={{ movies, addMore }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
