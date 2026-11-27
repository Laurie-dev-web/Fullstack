import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Recette } from "../types/Recettes";

export default function HomePage() {
  const [recettes, setrecettes] = useState<Recette[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/Recettes");
      const cleanData = (await rawData.json()) as Recette[];
      setrecettes(cleanData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>pixel&poêle</h1>
      {recettes.map((recette) => (
        <article key={recette.id}>
          <Link to={`/${recette.id}`}>
            <p>{recette.title}</p>
            <p>{recette.video_game}</p>
            <p>{recette.description}</p>
          </Link>
        </article>
      ))}
    </>
  );
}
