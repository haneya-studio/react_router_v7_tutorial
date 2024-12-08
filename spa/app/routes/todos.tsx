import type { Route } from "./+types/home";
import { Form } from "react-router";

const URL = `http://localhost:8000/hoge/`

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const res = await fetch(URL);
  const data = await res.json();
  console.log('clientLoader: ', data)
  return data;
}

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  const formData = await request.formData();  
  const text = formData.get("text")
  console.log('clientAction: ', text)

  const data = { text: text }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch(URL, requestOptions);
    if (response.ok) {
      const d = await response.json();
      //console.log(d);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
  return null; 
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  // return <Welcome />;
  return <div style={{ 
    padding: '50px',
    fontSize: '34px'
  }}>
    <Form method="post">
      <input type="text" name="text" style={{border: '2px solid #333'}} />
      <button type="submit" style={{border: '2px solid #333', marginLeft: '20px'}}>Submit</button>
    </Form>
    { 
      loaderData.map((hoge: { id: number, create_at: Date, text: string }) => 
        { return <div key={hoge.id}>{hoge.text}</div> }
      ) 
    }
  </div>
}
