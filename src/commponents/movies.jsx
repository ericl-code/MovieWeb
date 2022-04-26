import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./movieCard";
import Container from "./container";
import Pagination from "./pagination";
import Loader from "./loader";
import { GlobalContext } from "../context/globalState";

const API_KEY = "d9a2a89e1dbe265a06a281f6ad70bbb8";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { discardList } = useContext(GlobalContext);
  const [sortType, setSortType] = useState("asc");

  // https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}
  const apiEndPoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`;
  const fetchMovie = async () => {
    setLoading(true);
    const movieResponse = await fetch(apiEndPoint);
    const movieData = await movieResponse.json();
    setLoading(false);
    console.log(movieData);
    filterMovie(movieData.results);
  };

  const filterMovie = (data) => {
    // console.log(data);
    let withoutBlockdata = data.filter(
      (movie) => !discardList.some((item) => movie.id === item.id)
    );
    setMovies(withoutBlockdata);
  };

  useEffect(() => {
    fetchMovie();
  }, [currentPage, discardList]);

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  const sortByRated = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.vote_average - b.vote_average;
      } else {
        setSortType("asc");
        return b.vote_average - a.vote_average;
      }
    });
    setMovies(sortedList);
  };

  const sortByTitle = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.title.localeCompare(b.title);
      } else {
        setSortType("asc");
        return b.title.localeCompare(a.title);
      }
    });
    setMovies(sortedList);
  };

  const sortByCount = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.vote_count - b.vote_count;
      } else {
        setSortType("asc");
        return b.vote_count - a.vote_count;
      }
    });
    setMovies(sortedList);
  };
  const sortByDate = () => {
    const sortedList = [...movies].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.release_date > b.release_date ? 1 : -1;
      } else {
        setSortType("asc");
        return b.release_date < a.release_date ? -1 : 1;
      }
    });
    setMovies(sortedList);
  };

  return (
    <div>
      <Pagination data={movies} currentPage={currentPage} newPage={newPage} />

      <div id="btn-group-home" className="pagination-button">
        <button
          className="btn btn-outline-secondary me-2"
          onClick={sortByTitle}
        >
          {sortType === "asc" ? "Title ascending" : "Title descending"}
        </button>
        <button className="btn btn-outline-secondary me-2" onClick={sortByDate}>
          {sortType === "asc" ? "Date ascending" : "Date descending"}
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={sortByRated}
        >
          {sortType === "asc" ? "Score ascending" : "Score descending"}
        </button>
        <button
          className="btn btn-outline-secondary me-2"
          onClick={sortByCount}
        >
          {sortType === "asc" ? "Count ascending" : "Count descending"}
        </button>
      </div>

      <Container className="container">
        {loading ? (
          <Loader />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
        )}
      </Container>
    </div>
  );
};

export default Movies;
