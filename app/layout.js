import { Inter } from "next/font/google";
import "./globals.css";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "RealTime Private Chat App",
	description: "Realtime private chat app.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired, // Add this line for prop validation
  };