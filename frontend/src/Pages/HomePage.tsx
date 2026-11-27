import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Recette } from "../types/Recettes";
import "./HomePage.css";
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
    <section className="container">
      <h1 className="title">pixel&poêle</h1>
      {recettes.map((recette) => (
        <article key={recette.id} className="article">
          <Link to={`/${recette.id}`}>
            <p>{recette.title}</p>
            <p>{recette.video_game}</p>
            <p>{recette.portions_par_personne}</p>
          </Link>
        </article>
      ))}
    </section>
  );
}
