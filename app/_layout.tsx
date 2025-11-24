import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Folly - A Production Company",
  description:
    "A production company that believes in clarity, structure, and having snacks in the room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
