import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingProvider from "./providers/LoadingProvider";

export const metadata: Metadata = {
  title: "Web Innovation",
  description: "Discover our web innovation app that helps businesses transform ideas into digital solutions with cutting-edge technology and user-friendly design.",
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
      <body className={`${poppins.className} antialiased pt-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-fixed z-20`}>
        <LoadingProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
