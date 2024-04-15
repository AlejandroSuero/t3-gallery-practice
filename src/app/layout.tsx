import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "AoMe t3 Gallery",
  description: "AoMe's photo gallery using create t3-app@latest",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <header className="border-b border-white/30 p-4">
      <nav>
        <ul className="w-fulL flex items-center justify-between text-xl font-semibold">
          <li>t3 Gallery</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
