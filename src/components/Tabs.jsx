"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log("genre", genre);
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Top Lasted",
      url: "lates",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 gap-7 bg-gray-100 dark:bg-gray-900 flex items-center justify-center ">
      {tabs.map((tab, i) => (
        // eslint-disable-next-line react/jsx-key
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8  text-amber-600"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
