import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tadeo Artía",
	description: "A modern portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="min-h-screen min-w-screen">
			<body
				className={`${inter.className} min-h-screen min-w-screen bg-background antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
