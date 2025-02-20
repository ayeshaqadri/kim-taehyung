import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css'
import { useState } from "react";
import Kim1 from "../Images/KIM-1.jpg";  // Add your image paths
import Kim2 from "../Images/KIM-2.jpg";
import Kim3 from "../Images/KIM-3.jpg";
import Kim4 from "../Images/KIM-4.jpeg";
import Kim5 from "../Images/KIM-5.jpeg";
import Kim6 from "../Images/KIM-6.jpeg";
import Kim7 from "../Images/KIM-7.jpeg";
// import Kim10 from "../Images/KIM-10.jpeg";


const images = [
  { src: Kim1 },
  { src: Kim2 },
  { src: Kim3 },
  { src: Kim4 },
  { src: Kim5 },
  { src: Kim6 },
  { src: Kim7 },
  // { src: Kim8 },

];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-center text-3xl font-bold mb-5 text-purple-400">
        Taehyung's Gallery 💜
      </h1>

      <div className="tae">
        {images.map((image, i) => (
          <img 
            key={i}
            src={image.src}
            alt={`Kim Taehyung ${i}`}
            className="tae-img"
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