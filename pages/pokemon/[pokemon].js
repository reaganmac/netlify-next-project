import Head from "next/head";
import classes from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
	return (
		<>
			<Head>
				<title>Pokemon: {pokemon?.name}</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<h2>Hello Trainer!</h2>
			<div className={classes.container}>
				<p>This is a page all about {pokemon?.name} </p>
				<img
					src={pokemon?.sprites.front_default}
					alt='Squirtle Front Sprite'
				/>
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const pokemon = await res.json();

	let paths = pokemon.results.map((p) => {
		return `/pokemon/${p.name}`;
	});

	return {
		paths,
		fallback: false,
	};

	// if you set fallback to true, it changes the component to SSR (on certain deploys)
}

export async function getStaticProps({ params }) {
	// the property we want from params is the name of the file, so here "pokemon"
	const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
	);
	const pokemon = await res.json();
	return {
		props: {
			pokemon,
		},
	};
}

export default Pokemon;
