import "./globals.css";
import Header from "./Header/Header";

export const metadata = {
  title: "React Routing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
