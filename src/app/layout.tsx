import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "NaijaEmoSpeech",
  description: "Contribute Nigerian Accented Speech for Emotion Recognition!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lato.className, "bg-slate-200")}>
        {children}
      </body>
    </html>
  );
}
