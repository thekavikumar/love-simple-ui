"use client";

import React, { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

export default function Toggle() {
	const [dark, setdark] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	function handleClick(e) {
		document.documentElement.classList.toggle("dark");
		setdark(!dark);
	}
	return (
		<button
			id="dark-mode-toggle"
			className="float-right m-6 p-6"
			onClick={handleClick}
		>
			{dark ? <FaRegMoon /> : <FaRegSun />}
		</button>
	);
}
