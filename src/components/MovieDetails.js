import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MOVIE_POSTER } from "../utils/Constants";
import {BiArrowBack} from "react-icons/bi";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Movie deatils api by using id
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=bbea869c54206a9000a50eb5074a2b43`;
  const [moviewDetails, setMoviewDetails] = useState(MOVIE_DETAILS);

  const {
    release_date,
    runtime,
    overview,
    poster_path,
    vote_average,
    status,
    original_title,
  } = moviewDetails;

  let totalMinutes = runtime;
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  let movieLength = hours + "h:" + minutes + "m";

  const cast = moviewDetails?.production_companies;
  const generes = moviewDetails?.genres;

  useEffect(() => {
    console.log("useEffect renedered for movie details..");
    const getMovieDetails = async () => {
      const response = await fetch(MOVIE_DETAILS);
      const result = await response.json();
      console.log(result);
      setMoviewDetails(result);
    };
    getMovieDetails();
  }, []);

  return (
    <div className="container mt-5">
      <button
        className="btn btn-danger btn-sm mb-2 font-bold"
        onClick={() => navigate(-1)}
      >
       <BiArrowBack /> Back To home
      </button>
      <div className="movie-details">
        <div className="movie-img">
          <img
            src={MOVIE_POSTER + poster_path}
            height="350px"
            width="250px"
            alt="movieimg"
          />
        </div>
        <div className="m-details mx-5">
          <div className="movie-title">
            <div className="titles">
              <h1>
                {original_title}
                <sub
                  style={{ color: "red", fontSize: "13px", fontWeight: "bold" }}
                >
                  {status}
                </sub>
              </h1>
              <h1 className="m-rating">
                ⭐ {Math.round(vote_average * 10) / 10}
              </h1>
            </div>
            <p>
              {release_date} | {movieLength}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Cast : </span>
              {cast?.map((item) => {
                return (
                  <>
                    <span key={item?.id}> ◾ {item?.name}</span>
                  </>
                );
              })}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Geners : </span>
              {generes?.map((item) => {
                return (
                  <>
                    <span key={item?.id}> ◾ {item?.name}</span>
                  </>
                );
              })}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Descriptions : </span>
              {overview}
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default MovieDetails;
