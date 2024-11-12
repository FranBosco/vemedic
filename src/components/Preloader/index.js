"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  let pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`preloader ${isLoading ? "visible" : "preloader-deactivate"}`}
    >
      <div className="loader">
        <div className="loader-outter"></div>
       
  
      </div>
    </div>
  );
}
