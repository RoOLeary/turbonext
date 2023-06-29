export default async function Page({ params }) {
  return <p className="text-white">{params.slug}</p>;
}
