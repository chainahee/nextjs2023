import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/page";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Borrow and Return System KDR Transport",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-row justify-start">
          <Navbar />
          <div className="flex-1 p-4 bg-indigo-50">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
