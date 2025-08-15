import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingProvider from "./providers/LoadingProvider";

export const metadata: Metadata = {
  title: "WEB INNOVATION",
  description: "Web Development Services",
  icons: {
    icon: "/logo.png",
  }
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black pt-24`}>
        <LoadingProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
