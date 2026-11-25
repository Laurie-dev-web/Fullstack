import { useEffect, useState } from "react";
import "/reset.css";

type Log = {
  id: number;
  title: string;
  video_game: string;
  type_plat: string;
  description: string;
  portion_par_personne: number;
};

function App() {
  const [logs, setlogs] = useState<Log[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3000/logs");
      const cleanData = (await rawData.json()) as Log[];
      setlogs(cleanData);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1>pixel&poêle</h1>
      {logs.map((log) => {
        return <h1>{log.title}</h1>;
      })}
    </>
  );
}

export default App;
