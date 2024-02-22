import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

// import {  Link } from "react-router-dom";

function App() {
  const inputValue = useRef();

  const [movies, setMovies] = useState([]);
  const [Error, setError] = useState(false);

  const [isloading, setIsLoading] = useState(false);

  const gotoSearchPage = async (e) => {
    e.preventDefault();
    console.log(inputValue.current.value);

    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${inputValue.current.value}`
      );

      console.log(response.data.moviesData);
      setIsLoading(false);

      setMovies(response.data.moviesData);
    } catch (e) {
      setIsLoading(false);
    }
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
        <div className="header-sub">
          <h1>Movies</h1>
          <div className="search">
            {" "}
            <form onSubmit={gotoSearchPage}>
              <input type="text" ref={inputValue} onChange={gotoSearchPage} />
            </form>
            <FaSearch className="search-icon" onClick={gotoSearchPage} />
          </div>
        </div>
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
                <Link to={`/movie/${element.id}`}>view details</Link>
              </div>
            </>
          );
        })}
      </div>

      {/* <div className="footer">
          <Link to={"/about"}>About this page</Link>
        </div>
        <div className="footer">
          Programmatic
          <div onClick={goto}>goto to about page</div>
        </div> */}
    </>
  );
}

export default App;
