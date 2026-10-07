import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Student Dashboard",
  description: "CPAN 144 Assignment 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}