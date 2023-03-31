"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  console.log("dt", dt);
  return (
    <div className="min-w-[400px] h-[300px]">
      <Image
        fill
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        // className="w-full h-full"
      />
    </div>
  );
};

export default Movies;
