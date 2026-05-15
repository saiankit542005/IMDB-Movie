import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ movie }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
      whileHover={{ scale: 1.05 }}
    >
      <img
        className="h-80 w-full "
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className="p-4">
        <h1 className="text-lg font-bold text-emerald-800">{movie.Title}</h1>
        <p className="text-sm text-emerald-600">Year: {movie.Year}</p>
        <Link
          to={`/movies/${movie.imdbID}`}
          className="mt-3 inline-block w-full text-center px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;

 
