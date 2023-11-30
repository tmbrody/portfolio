import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {/* Image container */}
      <div className="hidden lg:block relative w-full mt-20">
        <div className="w-2/4 mx-auto">
          <img src={userData.avatarUrl} alt="avatar" className="mx-auto shadow" />
        </div>
      </div>

      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:pl-20 lg:pt-20 lg:pb-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
