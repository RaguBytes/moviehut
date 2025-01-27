import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import backupImg from "../assets/saveTigers1.png"
import { convertDollars, convertMins } from "../utils/utils";

export const MovieDetail = () => {

  const [movie, setMovie] = useState([]);
  const params = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backupImg;

  useEffect(() => {
      async function fetchMovies() {
          fetch(url)
              .then((res)=> res.json())
              .then((jsonData) => setMovie(jsonData));
      }
      fetchMovies();
  }, []);

  useEffect(()=> {
    document.title = `${movie.title}`;
  })

  return (
    <main className="container">
        <h5 className="text-danger py-2 text-overflow-1 border-bottom mb-3">{movie.title}</h5> 
        <div className="row">
          <div className="col-md-4">
            <img src={image} title={movie.title} className="img-fluid img-thumbnail" />
          </div>
          <div className="col-md-8">
            <h3 className="text-primary">{movie.title}</h3>
            <p className="text-justify mt-3">{movie.overview}</p>
            {
              movie.genres ? <p className="d-flex gap-3"> {
                  movie.genres.map((genre) => (<span key={genre.id} className="badge bg-danger">{genre.name}</span>))
                } </p> : ""
            }

            <p className="mt-2">
              <i className="bi bi-star-fill text-warning"></i>  {movie.vote_average} |  
               <i className="bi bi-people-fill text-success ms-2"></i>  {movie.vote_count} reviews
            </p>

            <table className="table table-bordered w-50 mt-2">
              <tbody>
                <tr>
                  <th scope="row">Runtime:</th>
                  <td>{convertMins(movie.runtime)} </td>
                </tr>
                <tr>
                  <th scope="row">Budget:</th>
                  <td>{convertDollars(movie.budget)}</td>
                </tr>
                <tr>
                  <th scope="row">Revenue:</th>
                  <td>{convertDollars(movie.revenue)}</td>
                </tr>
                <tr>
                  <th scope="row">Release Date:</th>
                  <td>{movie.release_date}</td>
                </tr>
                <tr>
                  <th scope="row">Original Language:</th>
                  <td>{movie.original_language}</td>
                </tr>
                <tr>
                <th scope="row">Available Languages:</th>
                <td>
                      {
                        movie.spoken_languages ? <p className="d-flex gap-3"> {
                            movie.spoken_languages.map((language) => (<span key={language.name} className="badge bg-success">{language.english_name}</span>))
                          } </p> : ""
                      }
                  </td>
                </tr>
              </tbody>
            </table>

            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="btn btn-warning" target='_blank'>View in IMDB</a>

          </div>
        </div>
    </main>
  )
}
