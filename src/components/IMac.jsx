import React, { useState } from "react";
import { imacModels } from "../data/index";

const IMac = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [visibleLabel, setVisibleLabel] = useState("Green");

  const getCurrentModel = () =>
    imacModels.find((model) => model.label.toLowerCase() === selectedColor);

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative border-l border-gray-300">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start p-8 bg-gray-50">
        <img
          src={getCurrentModel().images.side}
          alt="Imac"
          className="2xl:max-w-full xl:max-w-36 max-w-24"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-15">
        <img
          src={getCurrentModel().images.front}
          alt="Imac"
          className="2xl:max-w-full xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-10">
        <img
          src={getCurrentModel().images.back}
          alt="Imac"
          className="2xl:max-w-full xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-y-1/2 flex flex-col lg:space-y-2 space-y-1 bg-transparent">
        {imacModels.map((model, index) => (
          <div key={index} className="flex items-center space-x-2">
            <button
              style={{ backgroundColor: model.bg }}
              className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center ${
                selectedColor === model.label.toLowerCase() &&
                "border-2 border-blue-500"
              }`}
              onClick={() => {
                setSelectedColor(model.label.toLowerCase());
                setVisibleLabel(model.label);
              }}
            />
            {visibleLabel === model.label && (
              <span className="text-sm font-medium">{model.label}</span>
            )}
          </div>
        ))}

        <button
          type="button"
          className="w-min text-md mt-2 px-4 py-0.5 bg-blue-400 text-white rounded-lg"
        >
          Shop
        </button>
      </div>
    </div>
  );
};

export default IMac;
