import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { isMovieInLikeList, isMovieInDiscardList } from "../movieStatus";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../like_list.css";

export default function MovieLikeOrDiscardCard({ movie }) {
  const {
    deleteLike,
    deleteDiscard,
    addMovieToLikelist,
    addMovieToDiscard,
    likeList,
    discardList,
  } = useContext(GlobalContext);

  //   console.log(movie);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const { poster_path } = movie;
  const background_img = {
    backgroundImage: "url(" + IMG_URL + poster_path + ")",
  };

  return (
    <div className="each">
      <NavLink to={`/movies/${movie.id}`}>
        <div className="img" style={background_img}>
          {" "}
        </div>
      </NavLink>
      <div className="button_blow">
        {isMovieInLikeList(movie, likeList) === true ? (
          <Fragment>
            <div className="trash" onClick={() => deleteLike(movie)} />
            <div className="discard" onClick={() => addMovieToDiscard(movie)} />
          </Fragment>
        ) : (
          ""
        )}
        {isMovieInDiscardList(movie, discardList) === true ? (
          <Fragment>
            <div className="trash" onClick={() => deleteDiscard(movie)} />
            <div className="heart" onClick={() => addMovieToLikelist(movie)} />
          </Fragment>
        ) : (
          ""
        )}
        <div className="dots" />
      </div>
    </div>
  );
}
