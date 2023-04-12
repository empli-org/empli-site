import "./globals.css";

export const metadata = {
  title: "Empli Website",
  description: "Empli Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
