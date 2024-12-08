import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div style={{ 
    padding: '50px',
    fontSize: '34px'
  }}>
    <Link to="/">
      FUGA
    </Link>
  </div>
}


