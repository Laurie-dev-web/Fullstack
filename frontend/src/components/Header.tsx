import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">miam miam !</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
