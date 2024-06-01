import type { Metadata } from "next";
// import '@/app/ui/globals.css';
import { inter } from "@/app/ui/fonts";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata: Metadata = {
  title: "TPK VTT",
  description: "A VTT for RPGs",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
