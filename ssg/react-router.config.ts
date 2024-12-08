import type { Config } from "@react-router/dev/config";

const makePrerenderList = async () => {
  const URL = `http://localhost:8000/hoge/`
  const res = await fetch(URL);
  const data = await res.json();
  const toPrerender = ["/"].concat(
    data.map((hoge: { id: number, create_at: Date, text: string }) => "/"+hoge.id)
  );
  console.log(toPrerender)
  return toPrerender
}

export default {
  ssr: true,
  async prerender({ getStaticPaths }) {
    return makePrerenderList()
  }  
} satisfies Config;

