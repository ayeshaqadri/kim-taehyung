import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css'
import { useState } from "react";
import Kim1 from "../Images/KIM-1.jpg";
import Kim2 from "../Images/KIM-2.jpg";
import Kim3 from "../Images/KIM-3.jpg";
import Kim4 from "../Images/KIM-4.jpeg";
import Kim5 from "../Images/KIM-5.jpeg";
import Kim6 from "../Images/KIM-6.jpeg";
import Kim7 from "../Images/KIM-7.jpeg";
import Kim8 from "../Images/KIM-8.jpg";
import Kim9 from "../Images/KIM-9.jpg";
import Kim10 from "../Images/KIM-10.jpg";
import Kim11 from "../Images/KIM-11.jpg";
import Kim12 from "../Images/KIM-12.jpg";
import Kim13 from "../Images/KIM-13.jpg";
import Kim14 from "../Images/KIM-14.jpg";
import Kim15 from "../Images/KIM-15.jpg";
import Kim16 from "../Images/KIM-16.jpg";
import Kim17 from "../Images/KIM-17.jpg";
import Kim18 from "../Images/KIM-18.jpg";
import Kim19 from "../Images/KIM-19.jpg";
import Kim20 from "../Images/KIM-20.jpg";
import Kim21 from "../Images/KIM-21.jpg";
import Kim22 from "../Images/KIM-22.jpg";
import Kim23 from "../Images/KIM-23.jpg";
import Kim24 from "../Images/KIM-24.jpg";
import Kim25 from "../Images/KIM-25.jpg";
import Kim26 from "../Images/KIM-26.jpg";
import Kim27 from "../Images/KIM-27.jpg";
import Kim28 from "../Images/KIM-28.jpg";
import Kim29 from "../Images/KIM-29.jpg";
import Kim30 from "../Images/KIM-30.jpg";
import Kim31 from "../Images/KIM-31.jpg";
import Kim32 from "../Images/KIM-32.jpg";
import Kim33 from "../Images/KIM-33.jpg";
import Kim34 from "../Images/KIM-34.jpg";
import Kim35 from "../Images/KIM-35.jpg";
import Kim36 from "../Images/KIM-36.jpg";
import Kim37 from "../Images/KIM-37.jpg";


const images = [
  { src: Kim1 },
  { src: Kim2 },
  { src: Kim3 },
  { src: Kim4 },
  { src: Kim5 },
  { src: Kim6 },
  { src: Kim7 },
  { src: Kim8 },
  { src: Kim9 },
  { src: Kim10 },
  { src: Kim11 },
  { src: Kim12 },
  { src: Kim13 },
  { src: Kim14 },
  { src: Kim15 },
  { src: Kim16 },
  { src: Kim17 },
  { src: Kim18 },
  { src: Kim19 },
  { src: Kim20 },
  { src: Kim21 },
  { src: Kim22 },
  { src: Kim23 },
  { src: Kim24 },
  { src: Kim25 },
  { src: Kim26 },
  { src: Kim27 },
  { src: Kim28 },
  { src: Kim29 },
  { src: Kim30 },
  { src: Kim31 },
  { src: Kim32 },
  { src: Kim33 },
  { src: Kim34 },
  { src: Kim35 },
  { src: Kim36 },
  { src: Kim37 },

];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-center text-3xl font-bold mb-5 text-purple-400">
        Taehyung's Gallery 💜
      </h1>

      <div className="tae ">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Kim Taehyung ${i}`}
            className="tae-img zoomIn"
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