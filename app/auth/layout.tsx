import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "auth",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
