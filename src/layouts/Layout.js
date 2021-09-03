import * as React from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import "../style.css";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
