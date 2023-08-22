import React from "react";
import { useState, useEffect } from "react";
import { MOVIE_API } from "../utils/Constants";
import { MOVIE_POSTER } from "../utils/Constants";
import { Link } from "react-router-dom";
import {FiSearch} from "react-icons/fi";

const MovieList = () => {
  const [searchVal, setSearchVal] = useState("");
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const fetchmovieApi = async () => {
      try {
        const response = await fetch(MOVIE_API);
        const json = await response.json();
        setmovie(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchmovieApi();
  }, []);

  // Filter the movies data according input type
  const handleSearchClick = () => {
    const filterBySearch = movie?.results?.filter((item) =>
      item?.original_title.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log(setmovie(filterBySearch));
  };

  return (
    <div className="container mb-5">
      <div className="dearchFilter">
        <div className="row">
          <div className="col-md-12">
            <div className="searchFilter mt-5">
              <input
                className="form-control mr-sm-1"
                type="search"
                value={searchVal}
                onChange={(e) => {
                  setSearchVal(e.target.value);
                }}
                placeholder="Search your fevourate movie.."
                aria-label="Search"
              />
              <button
                className="btn btn-warning"
                type="submit"
                onClick={handleSearchClick}
              >
                <FiSearch /> 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {movie?.results?.map((items) => {
          return (
            <>
              <div className="col-md-3 pt-3 pb-7" key={items?.id}>
                <div className="card-groups">
                  <Link
                    to={"MovieDetails/" + items?.id}
                    className="card-design"
                  >
                    <div className="card">
                      <img
                        className="card-img"
                        src={MOVIE_POSTER + items?.poster_path}
                        alt="Card"
                        height="400px"
                        width="80px"
                      />
                      <div className="card-bodys p-2">
                        <h5 className="title">
                          {items?.original_title}{" "}
                          <span className="rating">
                            ⭐ {items?.vote_average}
                          </span>
                        </h5>
                        <p className="descriptions">{items?.overview}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
