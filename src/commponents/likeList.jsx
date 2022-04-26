import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import "./like_list.css";
import MovieLikeOrDiscardCard from "./common/moiveLikeOrDiscardCard";

const LikedMovies = () => {
  const { likeList } = useContext(GlobalContext);

  // const like_lists ={
  //   diplay:'grid',
  //   width:'100%',
  //   height:'100%',
  //   position:'absolute',
  //   background:'red',
  //   margin:'10px'

  // }

  return (
    <div className="page">
      <p className="subtitle ">Movie List of Liked</p>

      <div className="container">
        {likeList.map((movie) => (
          <MovieLikeOrDiscardCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default LikedMovies;
