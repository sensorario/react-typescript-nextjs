export default function PageSlug({
  params,
}: {
  nome: string;
  taglia: boolean;
  colore: string;
}) {
  console.log(params.product);
  return <h2>Segment catch all</h2>;
}
