import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./commonFiles/Header";
// import Footer from "./commonFiles/Footer";
import { Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Error from "./commonFiles/Error";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
