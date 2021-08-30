function deleteMovie(movieId) {
    console.log("delete movie", movieId);
    if (movieId == null || movieId.trim()==""){
      alert("Movie Id is mandatory");
    } else {
      const url =
        "https://product-mock-api.herokuapp.com/movieapp/api/v1/movies/" +
        movieId;
      axios
        .delete(url)
        .then((res) => {
          const data = res.data;
          console.log(data);
          console.log("Successfully Deleted");
        })
        .catch((err) => { 
          console.error(err.response);
          console.log("Unable to delete Movies" + movieId);
        });
    }
  }