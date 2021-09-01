function listMovies(){
    console.log("list Movies");

    const url = "https://movieapp-apii.herokuapp.com/movieapp/api/v1/movies";
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
        content += `<tr><td>${i++}</td><td>${movieObj.title}</td><td>${movieObj.language}</td><td><img src="/images/${movieObj.imageUrl}" width="50px" height=50px"></td><td><a href="edit-movie.html?id=${movieObj.id}">Edit</a> </td><td><button type="button" onclick="deleteMovie(${movieObj.id})">Delete</button></td></tr>`;
    }
    console.log(content);
    document.querySelector("#movies").innerHTML=content;
}