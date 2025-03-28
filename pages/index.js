import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mon Portfolio</h1>
          <div className="hidden md:flex space-x-6">
            <a
              href="#galerie"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Galerie
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
          {/* Menu mobile */}
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bienvenue dans mon univers artistique
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez mes créations et plongez dans mon monde créatif
          </p>
        </div>
      </section>

      {/* Filtres */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {["all", "peinture", "sculpture", "digital"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Galerie */}
      <section id="galerie" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte d'œuvre d'art (à répéter) */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/placeholder-image.jpg"
              alt="Œuvre d'art"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                Titre de l'œuvre
              </h3>
              <p className="text-gray-200">Technique utilisée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">email@example.com</p>
              <p className="text-gray-400">+33 6 XX XX XX XX</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white flex-grow"
                />
                <button className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
