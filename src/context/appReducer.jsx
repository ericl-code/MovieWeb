const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIKELIST":
      return {
        ...state,
        likeList: [action.payload, ...state.likeList],
        discardList: state.discardList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "ADD_MOVIE_TO_DISCARD":
      return {
        ...state,
        discardList: [action.payload, ...state.discardList],
        likeList: state.likeList.filter(
          (item) => item.poster_path !== action.payload.poster_path
        ),
      };
    //  addBack
    case "DELETE_LIKE_MOVIE":
      return {
        ...state,
        likeList: state.likeList.filter(
          (item) => item.poster_path !== action.payload.poster_path
        ),
        // console.log(action.payload)
      };
    //  addBack
    case "DELETE_DISCARD_MOVIE":
      return {
        ...state,
        discardList: state.discardList.filter(
          (item) => item.id !== action.payload.id
        ),
        // console.log(action.payload)
      };

    default:
      return state;
  }
};
export default appReducer;
