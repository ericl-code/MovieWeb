import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import MovieLikeOrDiscardCard from "./common/moiveLikeOrDiscardCard";

const DisLikedMovies = () => {
  const { discardList } = useContext(GlobalContext);

  return (
    <div className="page">
      <p className="subtitle">Movie List of Discard</p>

      <div className="container">
        {discardList.map((movie) => (
          <MovieLikeOrDiscardCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default DisLikedMovies;
