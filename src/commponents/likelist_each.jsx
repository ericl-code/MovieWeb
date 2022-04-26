import React, { useContext } from "react";
import "./like_list.css";
import { GlobalContext } from "../context/globalState";

export default function Likelist_each({ movie }) {
  const { deleteLike, addMovieToDiscard } = useContext(GlobalContext);

  //   console.log(movie);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const { poster_path } = movie;
  const background_img = {
    backgroundImage: "url(" + IMG_URL + poster_path + ")",
  };

  return (
    <div className="each">
      <div className="img" style={background_img}>
        {" "}
      </div>
      {/* <img className='img' src={IMG_URL+poster_path}></img> */}
      <div className="button_blow">
        <div className="trash" onClick={() => deleteLike(movie)} />
        <div className="discard" onClick={() => addMovieToDiscard(movie)} />
        <div className="dots" />
      </div>
    </div>
  );
}
