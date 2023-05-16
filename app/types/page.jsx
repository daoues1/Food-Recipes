import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((area) => area.strArea);
};

const page = async () => {  
  const areas = await fetchRecipeAreas();
  return (
    <div className="row row-cols-3 justify-content-center text-center">
      {areas.map((area, idx) => (
        <div className="row row-cols-1  g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  {idx + 1}-{area}
                </h5>
                <Link key={idx} className="card-text" href={`/types/${area}`}>
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
