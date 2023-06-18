"use client";

import { useState, useEffect } from "react";

type ClienOnlyProps = {
  children: React.ReactNode;
};

const ClientOnly: React.FC<ClienOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  });

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
