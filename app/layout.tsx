import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KFS – Kian Financial Services | Fast Loan Approval in India",
  description:
    "Get Personal Loans, Business Loans, Home Loans & more with KFS. Quick Approval, Minimum Documentation, 50+ Bank Partners. Apply now for free consultation.",
  keywords:
    "personal loan, business loan, home loan, loan against property, DSA, financial services, quick loan approval, India",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "KFS – Kian Financial Services",
    description: "Fast, Easy & Trusted Loan Solutions. Apply Now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
