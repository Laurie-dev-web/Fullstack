import { useParams } from "react-router";

export default function LogPage() {
  const { id } = useParams();

  return <p>is name (n°{id})</p>;
}
