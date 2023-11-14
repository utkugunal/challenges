import Link from "../components/Link";

export default function HomePage({ rooms }) {
  const onLights = rooms.filter((room) => room.isOn == true);

  return (
    <div>
      <h1>Home</h1>
      <p>{onLights.length} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
