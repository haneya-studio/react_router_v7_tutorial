// import type { Route } from "./+types/home";
import type { LoaderArgs } from "@remix-run/node"; 
import { Link } from "react-router";

export async function loader({ params }: LoaderArgs) {
/*export async function clientLoader({
  params 
}: Route.ClientLoaderArgs) {*/
  const url = `http://localhost:8000/hoge/` + params.id
  const res = await fetch(url);
  const data = await res.json();
  console.log('clientLoader: ', data)
  return data;
}

export default function Home({
  loaderData,
}: {
  loaderData: { id: number; create_at: Date; text: string }[];
}) {
/*export default function Home({
  loaderData,
}: Route.ComponentProps) {*/
  return <div style={{ 
    padding: '50px',
    fontSize: '70px'
  }}>
    <Link to="/">
      { loaderData.text }
    </Link>
  </div>
}


