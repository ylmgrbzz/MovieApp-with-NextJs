"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();
  console.log("dt", dt);
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="w-[470px] relative cursor-pointer "
    >
      <Image
        style={{ objectFit: "cover" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        // className="w-full h-full"
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100">
        <div className="font-bold text-2xl">{dt.title}</div>
        {dt?.release_date} - {dt?.vote_average}
      </div>
    </div>
  );
};

export default Movies;
