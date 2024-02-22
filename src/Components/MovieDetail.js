import { FaCircleArrowLeft } from "react-icons/fa6";
import "../Css/DetailPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    getMovies();
  }, []);

  const [movie, setName] = useState({});

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${param.movie_id}`
      );

      console.log(response);

      setName(response.data.singleMovieData);
    } catch (e) {}
  };

  return (
    <>
      <div className="goBack">
        <FaCircleArrowLeft
          className="arrow"
          style={{ fontSize: "30px" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <h3>Go Back</h3>
      </div>
      {/* <div>{param.movie_id}</div> */}
      <div style={{ paddingBottom: "20px" }}>
        <h1>{movie.name}</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={movie.image} alt="" />
        </div>

        <div>
          <h4>Short Info</h4>
          {movie.info}
        </div>
        <br></br>
        <div>
          <h4>Description</h4>
          {movie.desc}
        </div>
      </div>
    </>
  );
};
export default MovieDetail;
