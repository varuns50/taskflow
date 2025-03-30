"use client";

import { useEffect, useState } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log("Client-side logic here");
  }, []);

  return <>{children}</>;
}
