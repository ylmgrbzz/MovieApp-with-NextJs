import React from "react";
import Movies from "@/components/Movies";

const page = async ({ params }) => {
  console.log(params);
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-US&query=${keyword}&page=1&include_adult=false`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  console.log("data", data);
  console.log("data", data?.results);
  console.log("keyword", keyword);
  return (
    <div>
      {!data?.results ? (
        <div>Not Found</div>
      ) : (
        data?.results?.map((dt, i) => <Movies key={i} dt={dt} />)
      )}
    </div>
  );
};

export default page;
