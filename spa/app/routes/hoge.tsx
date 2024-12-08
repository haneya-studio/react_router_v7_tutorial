import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  return <div style={{ 
    padding: '50px',
    fontSize: '34px'
  }}>
    <Link to="/">
      HOGE
    </Link>
  </div>
}


