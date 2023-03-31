import React from "react";

const page = async ({ searchParams }) => {
  console.log("searchParams", searchParams);
  console.log("searchParams", searchParams.genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  console.log("data", data);

  return (
    <div>
      {" "}
      <h1 className="text-3xl font-bold underline">veri çekme alanı</h1>
    </div>
  );
};

export default page;
