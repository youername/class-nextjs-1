export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <title>Auth</title>
      <body>{children}</body>
    </html>
  );
}
