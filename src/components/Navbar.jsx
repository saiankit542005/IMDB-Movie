import React from "react";
import { Film } from "lucide-react";

function Navbar({ totalResults }) {
  return (
    <div className="backdrop-blur-lg bg-emerald-500/80 shadow-lg sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Film className="text-white w-7 h-7" />
        <h1 className="font-bold text-white text-2xl">IMDB Movie</h1>
      </div>
      <div className="font-medium text-white text-lg">
        Showing <span className="font-bold">10</span> out of{" "}
        <span className="font-bold">{totalResults}</span>
      </div>
    </div>
  );
}

export default Navbar;