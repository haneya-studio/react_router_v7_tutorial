import type { LoaderArgs } from "@remix-run/node"; 
import { Link } from "react-router";

const URL = `http://localhost:8000/hoge/`;

export async function loader({ params }: LoaderArgs) {
  const res = await fetch(URL);
  const data = await res.json();
  console.log('loader: ', data);
  return data;
}

export default function Home({
  loaderData,
}: {
  loaderData: { id: number; create_at: Date; text: string }[];
}) {
  return (
    <div style={{ padding: '50px', fontSize: '34px' }}>
      {loaderData.map((hoge) => (
        <div key={hoge.id}>
          <Link to={`/${hoge.id}`}>{hoge.text}</Link>
        </div>
      ))}
    </div>
  );
}