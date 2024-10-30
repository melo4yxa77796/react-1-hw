"use client";

import { useState } from "react";
import PlanetCard from "./PlanetCard";
import PlanetWishlistItem from "./PlanetWishlistItem/PlanetWishlistItem";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";

export const Destinations = () => {
  const planets = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (planet) => {
    setSelectedPlanets((prevSelectedPlanets) => {
      if (prevSelectedPlanets.some((p) => p.name === planet.name)) {
        return prevSelectedPlanets.filter((p) => p.name !== planet.name);
      }
      return [...prevSelectedPlanets, planet];
    });
  };

  const onAddWishlistItem = (planet) => {
    setSelectedPlanets((prevSelectedPlanets) => {
      if (prevSelectedPlanets.some((p) => p.name === planet.name)) {
        alert(`${planet.name} is already in your wishlist.`);
        return prevSelectedPlanets;
      }
      return [...prevSelectedPlanets, planet];
    });
  };

  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :O</p>
          ) : (
            <p>You have {numberOfPlanets} planet(s) in your wishlist!</p>
          )}

          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <ul className={styles.wishlistListItems}>
              {selectedPlanets.map((planet, index) => (
                <PlanetWishlistItem
                  key={index}
                  name={planet.name}
                  thumbnail={planet.thumbnail}
                  onRemove={() => onAddOrRemovePlanet(planet)}
                />
              ))}
            </ul>
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {planets.map((planet, index) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.some((p) => p.name === planet.name)}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};
export default Destinations;
