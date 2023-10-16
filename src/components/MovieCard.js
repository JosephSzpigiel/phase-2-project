import { useEffect, useState } from "react"

function MovieCard({movie}){

    const [showDetails, setShowDetails] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})

    const {Poster, Title, Year, imdbID} = movie

    function clickHandler(e){
        if(movieDetails.Title){
            setShowDetails(current => !current)
        }else{
            fetch(`https://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=c9f1eed`)
            .then(r => r.json())
            .then(movie => {
                setMovieDetails(movie)
                setShowDetails(current => !current)
        })
    }}

    return(
        <div className="movie-card, card">
            <h2>{Title}</h2>
            <img className='movie-image' src={Poster} onClick={clickHandler} sizes="auto"></img>
            <p>{Year}</p>
            {
                showDetails ? (
                    <form>
                        <label htmlFor='rating'>Rating from 1-100:</label>
                        <input name ='rating' type="number" min={1} max={100}></input>
                        <input type="submit"></input>
                        <p>Plot: {movieDetails.Plot}</p>
                    </form> 
                ) : null
            }
        </div>
    )
}

export default MovieCard