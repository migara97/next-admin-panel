"use client";
import "./globals.css";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Script from "next/script";
import Providers from "./provider";

export default function RootLayout({ children }) {
	useEffect(() => {
		initFlowbite();
	}, []);
	return (
		<html lang="en">
			<head>
				
			</head>
			<body className="bg-gray-800">
				<Providers>
				{children}
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
				</Providers>
			</body>
		</html>
	);
}
