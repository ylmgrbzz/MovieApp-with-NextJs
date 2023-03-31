"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const themeMode = theme === "system" ? systemTheme : theme;
  console.log("themeMode", themeMode);
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("light")}
          />
        ) : (
          <CiDark
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default ThemeComp;
