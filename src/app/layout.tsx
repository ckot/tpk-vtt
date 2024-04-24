import type { Metadata } from "next";
import '@/app/ui/globals.css';
import { inter } from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: "TPK VTT",
  description: "A VTT for RPGs",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          {children}
        </body>
    </html>
  );
}
