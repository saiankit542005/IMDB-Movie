import React from "react";
import { Link } from "react-router-dom";
import { Film, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* 🎬 Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1920&q=80"
          alt="Cinema background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-gray-900" />
      </div>

      {/* 🌟 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-center px-6"
      >
        {/* App Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Film className="w-12 h-12 text-emerald-500" />
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Movie Explorer
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl mb-10"
        >
          Discover your favorite movies, explore new adventures, and watch
          unlimited entertainment — all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/movies"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/40"
          >
            <span>Search Movies</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Cinematic Lights ✨ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute w-72 h-72 bg-emerald-500/30 rounded-full blur-3xl top-20 left-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl bottom-10 right-10"
      />
    </div>
  );
}

export default HomePage;