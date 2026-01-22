"use client";

import { useEffect, useState } from "react";
import CatLoader from "./CatLoader";

const FIRST_LOAD_KEY = "g-de-gato-first-load";

export default function InitialLoader() {
  const [showLoader, setShowLoader] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if this is the first visit
    // Only access sessionStorage on client side
    if (typeof window === "undefined") return;

    const hasVisited = sessionStorage.getItem(FIRST_LOAD_KEY);

    if (hasVisited) {
      // User has visited before, assets probably cached, hide loader
      setShowLoader(false);
    } else {
      // First visit on this tab, show loader and mark as visited
      setShowLoader(true);
      sessionStorage.setItem(FIRST_LOAD_KEY, "true");
    }
  }, []);

  const handleFadeComplete = () => {
    setShowLoader(false);
  };

  // Show blocking solid color overlay while checking visit status to prevent flash
  if (showLoader === null) {
    return (
      <div className="fixed inset-0 z-9999 bg-[#003312]" aria-hidden="true" />
    );
  }

  // Don't render loader if user has visited
  if (!showLoader) {
    return null;
  }

  return <CatLoader autoFadeAfter={2000} onFadeComplete={handleFadeComplete} />;
}
