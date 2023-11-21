import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllListingsPage() {
  const { data } = useSWR("/api/products", fetcher);

  console.log(data);

  if (!data) {
    return;
  }

  return (
    <>
      <h1>List of Products</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
