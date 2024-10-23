"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [wishListItemName, setWishlistListItemName] = useState("");

  const onAddItemPressed = () => {
    if (wishListItemName.trim() === "") {
      alert("Please enter a valid wishlist item name!");
    } else {
      onAddWishlistItem({ name: wishListItemName, thumbnail });
      setWishlistListItemName("");
      setThumbnail("/destination/image-europa.png");
    }
  };

  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  // 2. Connect the onThumbnailChange to the <select>

  // TASK - React 1 week 3
  // implement this function
  // Clear the <input/> field on button press
  // pass the thumbnail and the name from the input to the onAddWishlistItem function
  // call the onAddWishlistItem here*/

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishListItemName}
        onChange={(e) => setWishlistListItemName(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        onChange={(e) => setThumbnail(e.target.value)}
        value={thumbnail}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
