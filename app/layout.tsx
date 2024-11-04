import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "./utils/fonts";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */



export const metadata: Metadata = {
  title: "Startup Pitch",
  description: "Pitch your startup idea to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${openSans.className} antialiased bg-slate-900 text-gray-200  `}>{children}
        <Toaster />
      </body>
    </html>
  );
}
