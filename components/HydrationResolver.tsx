"use client";

import React, { useEffect, useState } from "react";

export default function HydrationResolver({
  children,
}: {
  children: React.ReactNode;
}) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded && children}</>;
}
