import React, { useState } from "react";
import { macbookModels } from "../data/index";

const MacBook = () => {
  const [selectedChip, setSelectedChip] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const currntMb = macbookModels[selectedChip];
  const currntColor = currntMb.colors[selectedColor];

  const handleSelectedChip = (index) => {
    setSelectedChip(index);
    setSelectedColor(0);
  };
  return (
    <div className="relative flex flex-col items-center justify-around bg-white py-5 h-full border-l border-gray-300">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800">
        Choose your new MacBook Air.
      </h3>
      <div className="flex flex-row">
        {macbookModels.map((mb, index) => (
          <button
            key={index}
            className={`2xl:w-36 md:w-26 w-28 2xl:h-15 md:h-12 h-12 flex flex-col justify-evenly items-center border ${
              index === 0
                ? "rounded-l-xl border-r-blue-400"
                : "rounded-r-xl border-l-blue-400"
            }
            ${
              index === selectedChip
                ? "border-2 border-blue-400"
                : "border-gray-800"
            }`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="2xl:text-lg xl:text-sm text-xs font-bold text-gray-800">
              With {mb.chip} Chip
            </span>
            <span className="2xl:text-base xl:text-sm text-xs text-gray-600">
              {mb.price}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col 2xl:p-4 2xl:pt-0 md:items-start items-center">
        <div className="h-44 2xl:mb-0 -mb-0">
          <img
            src={currntColor.img}
            alt={`MacBook Air With ${currntMb.chip}`}
            className="2xl:w-68 xl:w-52 w-48 h-auto 2xl:mt-0 sm:-mt-6"
          />
        </div>
        <span className="2xl:text-lg xl:text-sm font-medium text-gray-800 mb-1 text-center md:text-left">
          {currntColor.label}
        </span>
        <div className="flex space-x-2 mb-3 md:text-left justify-center md:justify-start">
          {currntMb.colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color.bg }}
              className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[#2e3641] rounded-full border hover:border-blue-500 ${
                selectedColor === index
                  ? "border-2 border-blue-400"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedColor(index)}
            ></button>
          ))}
        </div>
        <img
          src={currntMb.icon}
          alt={`Apple ${currntMb.chip} Icon`}
          className="size-11 xl:mb-2"
        />
        <div className="2xl:mb-4 xl:mb-2 text-center md:text-left">
          {currntMb.specs.map((spac, index) => (
            <p
              key={index}
              className="2xl:text-lg xl:text-base font-semibold text-gray-800 mb-0.4"
            >
              {spac}
            </p>
          ))}
        </div>
        <button
          type="button"
          className="w-min text-md px-4 py-0.5 bg-blue-400 text-white rounded-lg"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MacBook;
