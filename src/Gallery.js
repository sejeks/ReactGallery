import React, { useState, useEffect, useRef } from "react";
import Image from "./Image";
import Popup from "./Popup";

function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);
  const popup = useRef(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        const data = await response.json();
        const urls = data.map((item) => item.download_url);
        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, []);

  const gallery = (
    <div className="gallery">
      {imageUrls.map((imageUrl, index) => (
        <Image imageUrl={imageUrl} key={"img" + index} popup={popup}/>
      ))}
      <Popup ref={popup} />
    </div>
  );

  return imageUrls.length ? gallery : null;
}

export default Gallery;