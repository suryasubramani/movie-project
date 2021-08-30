function viewMovie(movieId) {
    console.log("view movie", movieId);
    if (movieId == null) {
      alert("Movie Id is mandatory");
    } else {
      const url =
        "https://product-mock-api.herokuapp.com/movieapp/api/v1/movies/" +
        movieId;
      axios
        .get(url)
        .then((res) => {
          const movieObj = res.data;
          displayMovie(movieObj);
        })
        .catch((err) => {
          console.error(err.response);
          console.log("Unable to delete Movies" + movieId);
        });
    }
  }
  
  function displayMovie(movieObj){
    let content = `<tr><td>${movieObj.title}</td><td>${movieObj.language}</td><td>${movieObj.imageUrl}</td></tr>`;
    console.log(content);
  }