import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const truncate = (input) =>
    input.length > 25 ? `${input.substring(0, 25)}...` : input;

  return (
    <>
      <div className="movieCard">
        <Link to={`/movies/${props.data.id}`}>
          <img src={IMG_URL + props.data.poster_path} alt={props.data.title} />
        </Link>
        <div className="score_count">
          <div>
            Score: {props.data.vote_average} | Count: {props.data.vote_count}
          </div>
        </div>
        <Button data={props.data} />
        <span className="movie-title">{truncate(props.data.title)}</span>
        <span className="release-date">{props.data.release_date}</span>
      </div>
    </>
  );
};

export default MovieCard;
