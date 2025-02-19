import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Kim1 from "../Images/kim-taehyung-2.jpg";  // Add your image paths
import Kim2 from "../Images/kim-taehyung-3.jpeg";
import Kim3 from "../Images/kim-taehyung-1.avif";
import Kim4 from "../Images/kim-taehyung-main.webp";

const images = [
  { src: Kim1 },
  { src: Kim2 },
  { src: Kim3 },
  { src: Kim4 },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-center text-3xl font-bold mb-5 text-purple-400">
        Taehyung's Gallery 💜
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Kim Taehyung ${i}`}
            className="w-full h-60 object-cover rounded-lg cursor-pointer transition duration-300 hover:scale-105"
            onClick={() => {
              setOpen(true);
              setIndex(i);
            }}
          />
        ))}
      </div>

      <Lightbox
        slides={images}
        open={open}
        index={index}
        close={() => setOpen(false)}
      />
    </div>
  );
}

export default Gallery;