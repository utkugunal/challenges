import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);
  return <h1>Hello from Next.js! Here is your data: {data}</h1>;
}
