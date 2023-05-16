import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="px-4 p-5 m-5 text-center">
      <h1 className="display-2 fw-bold text-danger">
        Explore food from around the world
      </h1>
      <Link className="btn btn-primary btn-lg px-4 gap-3" href="/types">
        List of Cuisines
      </Link>
    </div>
  );
}
