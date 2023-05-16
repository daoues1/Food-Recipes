import Image from "next/image";

async function getRecipeDetails(id) {
  // await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function Page({ params }) {
  const recipeDetails = await getRecipeDetails(params.id);
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean);

  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3 text-center card bg-secondary">
        <div>
          <Image
            alt="Recipe"
            width={300}
            height={300}
            src={details.strMealThumb}
            className="bi mt-4 mb-3 rounded"
          />
        </div>
        <div className="p-5">
          <h1>
            Recipe Name:{" "}
            <span className="text-body-emphasis">{details.strMeal}</span>
          </h1>

          <div className="tags mt-3">
            <p className="col-lg-8 mx-auto fs-5">Ingredients List:</p>
            {ingredients.map((tag, i) => (
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill mr-2 mb-2 px-2 py-1 m-3"
                key={i}
              >
                {tag}
              </button>
            ))}
          </div>
          <button className="btn btn-primary mt-4">
            <span>Video Link: </span>
            <a
              className="text-danger"
              target="_blank"
              href={details.strYoutube}
              rel="noreferrer"
            >
              How to make {details.strMeal}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
