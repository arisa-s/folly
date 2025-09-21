"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-folly-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="font-primary text-4xl text-folly-red mb-4">
          Something went wrong!
        </h2>
        <p className="font-accent text-lg text-folly-red mb-8">
          We're having a moment. (Not the good kind.)
        </p>
        <button
          onClick={() => reset()}
          className="font-secondary bg-folly-blue text-folly-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
