export function isMovieInLikeList(movie, likeList) {
  const result = likeList.some((liked) => movie.id === liked.id);
  return result;
}

export function isMovieInDiscardList(movie, discardList) {
  const result = discardList.some((liked) => movie.id === liked.id);
  return result;
}
