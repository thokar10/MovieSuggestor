import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const param = useParams();
  useEffect(() => {
    getMovies();
  }, []);

  const [movie, setMovie] = useState({});
  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${param.movie_name}`
      );

      console.log(response);

      setMovie(response.data.moviesData);
    } catch (e) {}
  };

  return (
    <>
      {param.movie_name}
      <div>
        {movie.map(() => {
          return <>{movie.name}</>;
        })}
      </div>
    </>
  );
};
export default SearchPage;
