import React, { useState, useEffect } from "react";
import "./movieCard.css";

const MovieDetail = (props) => {
  const [data, setData] = useState();
  const { id } = props.match.params;

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d9a2a89e1dbe265a06a281f6ad70bbb8&language=en-US`
    )
      .then((res) => res.json())
      .then((results) => {
        console.log(results);

        if (isMounted) setData(results);
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!data) return null;

  const handleClose = () => {
    props.history.push("/movies");
  };

  return (
    <div className="details">
      <i className="bi bi-x-circle-fill" onClick={handleClose}></i>
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
        alt=""
      />
      <div className="info-container">
        <div className="row">
          <div className="col-4">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt=""
            />
          </div>
          <div className="movie-description col">
            <h1 className="movie-title-white">{data.original_title}</h1>
            <div className="moive-date">{data.release_date}</div>
            <div className="movie-genre">
              {data.genres.map((item) => (
                <span id={item.name.split(" ").join("")}>{item.name}</span>
              ))}
            </div>
            <div className="movie-overview">{data.overview}</div>
            <div className="movie-vote">
              Score: {`${data.vote_average} / 10`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
