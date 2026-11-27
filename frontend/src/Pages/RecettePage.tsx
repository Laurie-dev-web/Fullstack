import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { Recette } from "../types/Recettes";

export default function RecettePage() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [recette, setrecette] = useState<Recette | null>(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3000/Recettes/${id}`);
      const cleanData = (await rawData.json()) as Recette;
      setrecette(cleanData);
    }
    fetchData();
  }, []);

  const hDeletedRecette = async () => {
    if (confirm("ayo ?")) {
      await fetch(`http://localhost:3000/Recettes/${id}`, {
        method: "DELETE",
      });
      navigation("/");
      //sinon
    }
  };
  if (!recette) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <article>
      <h1>
        {recette.title} (n°{id})
        <button onClick={hDeletedRecette}>supprimer</button>
      </h1>
      <p>{recette.video_game}</p>
      <p>{recette.portions_par_personne}</p>
      <p>{recette.description}</p>
    </article>
  );
}
