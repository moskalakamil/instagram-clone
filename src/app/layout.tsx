import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InstagramClone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200 flex justify-center items-center">
        <div className="bg-white shadow-md rounded-md h-full w-full sm:h-[38rem] sm:w-96">
          {children}
        </div>
      </body>
    </html>
  );
}
