export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-center min-h-screen w-fill">{children}</div>;
}
