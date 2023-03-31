import React from "react";
import Image from "next/image";
const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  console.log("id", id);
  const movie = await getMovie(id);
  console.log("movie", movie);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        // className="w-full h-full"
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movie?.title}</div>
        <div className="2-1/2">{movie?.overview}</div>
        <div className="my-3">
          {" "}
          {movie?.release_date} - {movie?.vote_average}
        </div>
        <div>
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
