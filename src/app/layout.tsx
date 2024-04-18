import { ClerkProvider } from "@clerk/nextjs";

import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { TopNav } from "@/app/_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "AoMe t3 Gallery",
  description: "AoMe's photo gallery using create t3-app@latest",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
