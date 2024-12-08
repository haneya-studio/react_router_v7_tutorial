import type { Route } from "./+types/home";
import { Link } from "react-router";

export default function Home() {
  // return <Welcome />;
  return <div style={{ 
    padding: '50px',
    fontSize: '34px'
  }}>
    <div>
      <Link to="./hoge">
        HOGE
      </Link>
    </div>
    <div>
      <Link to="./fuga">
        FUGA
      </Link>
    </div>
    <div>
      <Link to="./todos">
        TODOs
      </Link>
    </div>
  </div>
}
