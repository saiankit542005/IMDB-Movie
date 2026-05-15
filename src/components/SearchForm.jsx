import React from "react";
import { motion } from "framer-motion";

function SearchForm({ handleSubmit, isLoading, setQuery }) {
  return (
    <motion.form
      className="flex gap-3 w-full max-w-xl mx-auto"
      onSubmit={handleSubmit}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <input
        className="flex-1 px-20 py-3 rounded-xl border border-emerald-400 focus:ring-2 focus:ring-emerald-600 outline-none bg-white shadow-sm"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🎬 Search movies..."
      />
      <button
        className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-md hover:bg-emerald-600 transition"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </motion.form>
  );
}

export default SearchForm;

