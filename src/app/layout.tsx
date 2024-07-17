import "~/styles/globals.css";
import Header from "./header";
import Divider from "./Divider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Divider/>
        {children}</body>
    </html>
  );
}