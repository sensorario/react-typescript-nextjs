"use client";

export default function Home({ params }: { params: { locale: string } }) {
  console.log(params);
  return <div className="container">locale: {params.locale}</div>;
}
