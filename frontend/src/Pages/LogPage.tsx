import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Recette } from "../types/Recettes";

export default function LogPage() {
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

  if (!recette) {
    return <p>Waiting for Log n°{id}...</p>;
  }

  return (
    <p>
      {recette.title} (n°{id})
    </p>
  );
}
