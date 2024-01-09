'use client'

import { useEffect, useState } from "react";

export default function Lento() {
  const [data, setData] = useState(null);
  useEffect(
    () =>
      fetch("http://localhost:3001")
        .then((res) => res.json())
        .then((data) => setData(data)),
    []
  );
  return [data];
}
