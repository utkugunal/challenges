import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const router = useRouter();
  const id = router.query.id;
  const fetcher = (...args) =>
    fetch(...args).then((res) => {
      console.log(res);
      return res.json();
    });
  const { data, error, loading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  console.log(data);
  if (error) return <div>{error.message}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data["eye_color"]}
        birthYear={data["birth_year"]}
      />
    </Layout>
  );
}
