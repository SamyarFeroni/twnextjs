import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/HeaderMain";
import MailInput from "./components/MailInput"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-y-auto text-custom-font">
        <MailInput/>
        <HeaderMain />
        <HeaderTop />
        {children}
      </body>
    </html>
  );
}
