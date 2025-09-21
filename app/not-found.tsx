import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-folly-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="font-primary text-8xl text-folly-red mb-4">404</h2>
        <p className="font-secondary text-2xl text-folly-red mb-8">
          This page doesn't exist. (We checked twice.)
        </p>
        <Link
          href="/"
          className="font-accent text-folly-blue text-lg hover:underline"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
