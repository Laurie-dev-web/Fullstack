import { useEffect, useState } from "react";

type Recette = {
  id: number;
  title: string;
  video_game: string;
  type_plat: string;
  description: string;
  portion_par_personne: number;
};

export default function HomePage() {
  const [recettes, setrecettes] = useState<Recette[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/recettes");
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
          <h2>{recette.title}</h2>
          <p>{recette.video_game}</p>
          <p>{recette.description}</p>
        </article>
      ))}
    </>
  );
}
