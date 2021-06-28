import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = (props) => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		const name = document.getElementById("pokemon-name").value;

		router.push(`/pokemon/${name}`);
	};

	return (
		<>
			<Head>
				<title>My Next.js Site!</title>
			</Head>
			<h2>Hello World!</h2>
			<p>This is a Next.js app! Wow!</p>
			<Link href='/pokemon'>
				<a>Go to Pokemon!</a>
			</Link>
			<br />
			<Link href='/blog/'>
				<a>Go to Blog!</a>
			</Link>
			<br />
			<input id='pokemon-name' type='text' placeholder='ex: Pikachu' />
			<button onClick={(e) => handleClick(e)}>
				Click me to programatically go to Pokemon!
			</button>
		</>
	);
};

export default Home;
