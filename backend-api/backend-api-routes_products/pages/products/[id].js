import { useRouter } from "next/router";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(id);
  //   console.log(router);
  const { data } = useSWR(`/api/products/${id}`, fetcher);
  if (!data) {
    return;
  }
  return <p>{data.name}</p>;
}
