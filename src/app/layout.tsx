import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalFont from "next/font/local";
import { cn } from "~/utils";

const inter = Inter({ subsets: ["latin"] });

const font = LocalFont({
  src: "../../assets/fonts/Tiny5-Regular.ttf",
  variable: "--font-tiny5",
});
console.log(font);
export const metadata: Metadata = {
  title: "Ludo",
  description: "Play ludo online. Multiplayer",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.variable, inter.className, "dark")}>
        {children}
      </body>
    </html>
  );
}
