import React from "react";
import Image from "next/image";
import Link from "next/link";

//Components
import AddToCart from "./AddToCart";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {recipes?.map((recipe, idx) => {
            return (
              <div className="col text-center card p-2" key={idx}>
                <div className="card shadow-sm">
                  <Image
                    alt="Recipe"
                    width={300}
                    height={300}
                    src={recipe.strMealThumb}
                    className="bd-placeholder-img card-img-top"
                  />

                  <div className="card-body">
                    <div className="card-text">
                      <h6 className="font-bold text-2xl">{recipe.strMeal}</h6>
                    </div>

                    <div className="card-text">
                      <div class="btn-group">
                        <Link href={`/types/${type}/${recipe.idMeal}`}>
                          <button className="btn btn-primary m-4 ">
                            Get Recipe Details
                          </button>
                        </Link>
                        <AddToCart name={recipe.strMeal} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
