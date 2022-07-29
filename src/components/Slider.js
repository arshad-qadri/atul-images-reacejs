import React, { useState } from "react";
import { bigImages, smallImages } from "../data";

const Slider = () => {
  const [imgInd, setImgInd] = useState(0);
  const handleSelectImg = (index) => {
    setImgInd(index);
  };
  return (
    <div className="slider mt-2">
      <div className="slide_main_image mx-auto">
        <img
          src={`./assets/images/${bigImages[imgInd].image}.jpg`}
          alt="slide images"
        />
      </div>
      <div className="slide_images mt-2">
        {bigImages.map((item, index) => (
          <div
            className="slide_single_image"
            key={item.id}
            onClick={() => handleSelectImg(index)}
          >
            <img src={`./assets/images/${item.image}.jpg`} alt="slide-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
