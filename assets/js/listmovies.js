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
    for(let movieObj of movies){
        content += `<div class="ncard" style="background-image: url('/images/${movieObj.imageUrl}');  ">
            <div class="ncard__actions">
                <span><a href="edit-movie.html?id=${movieObj.id}">Edit</a> </span>
                <span><button type="button" onclick="deleteMovie(${movieObj.id})">Delete</button></span>
            </div>
            <div class="ncard__footer">
                <div class="lang">${movieObj.language}</div>
                <div>${movieObj.title}</div>
            </div>
        </div>`;
    }
    console.log(content);
    document.querySelector("#movies").innerHTML=content;
}