import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Button = (props) => {
  const { addMovieToLikelist, likeList } = useContext(GlobalContext);
  let storedLikedMovie = likeList.find((listId) => listId.id === props.data.id);
  const likedMovie = storedLikedMovie ? true : false;

  const { addMovieToDiscard, discardList } = useContext(GlobalContext);
  let storedDiscardMovie = discardList.find(
    (listId) => listId.id === props.data.id
  );
  const discardMovie = storedDiscardMovie ? true : false;
  return (
    <div className="button">
      <button
        disabled={likedMovie}
        onClick={() => {
          addMovieToLikelist(props.data);
        }}
        className="like"
      >
        {likedMovie ? "Liked" : "Like"}
      </button>

      <button
        disabled={discardMovie}
        onClick={() => {
          addMovieToDiscard(props.data);
        }}
        className="block"
      >
        Block
      </button>
    </div>
  );
};

export default Button;
