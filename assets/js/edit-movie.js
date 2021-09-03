function updateMovie(movieId,title,language,imageUrl){
    console.log("Update Movie" , title, language, imageUrl);
    
    try{
        Validator.isValidString(movieId, "Movie Id is Mandatory");
        Validator.isValidString(title, "Movie Title is Mandatory");
        Validator.isValidString(language, "Movie Language is Mandatory");
        Validator.isValidString(imageUrl, "Movie Image is Mandatory");

        console.log("Movie Details are valid");
        alert("Successfully Added");
        const movieObj = { movieId:movieId, title:title, language:language, imageUrl:imageUrl};
        console.log(movieObj);
        const url = "https://movieapp-apii.herokuapp.com/movieapp/api/v1/movies/" + movieId;
        axios.put(url,movieObj).then(res=>{
            const data = res.data;
            console.log("Response:", data);
            console.log("Successfully Updated");
        })
        .catch(err=>{
            console.error(err.response);
            console.log("Unable to update Movie");
        })
    }
    catch(err){
        console.error(err.message);
        alert("Error" + err.message);
    }
        
}