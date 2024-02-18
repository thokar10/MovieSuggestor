import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [Error, setError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const goto = () => {
    navigate("/about");
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );

      console.log(response.data.moviesData);
      setIsLoading(false);

      setMovies(response.data.moviesData);
    } catch (e) {
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      {Error ? (
        <>
          <div style={{ backgroundColor: "red", color: "white" }}>Error</div>
        </>
      ) : (
        <></>
      )}

      {isloading ? (
        <>
          <div style={{ backgroundColor: "red", color: "white" }}>loading</div>
        </>
      ) : (
        <></>
      )}

      <div className="header">
        <h1 style={{ textAlign: "center" }}>MOVIES</h1>
      </div>
      <div className="gridContainer">
        {movies.map((element) => {
          return (
            <>
              <div className="second-grid-container">
                <div>
                  <img className="movie-image" src={element.image} alt="" />
                </div>
                <div className="movie-name">{element.name}</div>
              </div>
            </>
          );
        })}
      </div>

      <div className="footer">
        <Link to={"/about"}>About this page</Link>
      </div>
      <div className="footer">
        Programmatic
        <div onClick={goto}>goto to about page</div>
      </div>
    </>
  );
}

export default App;
