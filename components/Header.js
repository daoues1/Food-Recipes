"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];

  return (
    <div className="container p-3 text-bg-dark  ">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <Link href="/">
            <h1 className="bi me-2">شهية</h1>
          </Link>
        </div>
        {pathname && currentArea && (
          <div>
            <Link
              className="bg-blue-500 text-white p-4 text-xs sm:text-lg rounded font-bold"
              href={recipeID ? `/types/${currentArea}` : "/types"}
            >
              Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
