"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  console.log("dt", dt);
  return (
    <div className="w-[470px] relative cursor-pointer ">
      <Image
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        // className="w-full h-full"
      />
      <div className="absolute bottom-0 p-3 ">
        <div className="font-bold text-2xl">{dt.title}</div>
        {dt.release_date} - {dt.vote_average}
      </div>
    </div>
  );
};

export default Movies;
