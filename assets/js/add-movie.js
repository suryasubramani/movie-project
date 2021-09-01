function addMovie(title,language, imageUrl){
    console.log("Add Movie" , title, language, imageUrl);
    
    try{
        Validator.isValidString(title, "Movie Title is Mandatory");
        Validator.isValidString(language, "Movie Language is Mandatory");
        Validator.isValidString(imageUrl, "Movie Image is Mandatory");

        console.log("Movie Details are valid");
        //alert("Successfully Added");
        const movieObj = { title:title, language:language, imageUrl: imageUrl};
        console.log(movieObj);
        const url = "https://movieapp-apii.herokuapp.com/movieapp/api/v1/movies";
        axios.post(url,movieObj).then(res=>{
            const data = res.data;
            console.log("Response:", data);
            console.log("Successfully Added");

        }).catch(err=>{
            console.error(err.response);
            console.log("Unable to add Movie");
        })
    }
    catch(err){
        console.error(err.message);
        alert("Error" + err.message);
    }
    
}