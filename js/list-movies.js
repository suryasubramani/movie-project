function listMovies(){
    console.log("list Movies");

    const url = "https://product-mock-api.herokuapp.com/movieapp/api/v1/movies";
        axios.get(url).then(res=>{
            const data = res.data;
            console.table(data);
            formMovieTableData(data);
          
        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to fetch Movies");
        })
}

function formMovieTableData(movies){

    let content = "";
    let i =1;
    for(let movieObj of movies){
        content += `<tr><td>${i++}</td><td>${movieObj.title}</td><td>${movieObj.language}</td><td>${movieObj.imageUrl}</td></tr>`;
    }
    console.log(content);
}