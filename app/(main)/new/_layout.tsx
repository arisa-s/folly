import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
      <footer>
        <div>
          <div className="flex items-center gap-2 ml-auto mt-20 font-secondary space-x-6 py-6">
            <Image
              src="/images/logo/FOLLY_SYMBOL_COLOR_RGB.png"
              alt="Map"
              width={100}
              height={100}
              className="p-2"
            />
            <div className="text-lg">
              <p>Folly productions limited</p>
              <p>9 st Quintin</p>
              <p>W10 6NX</p>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
}
