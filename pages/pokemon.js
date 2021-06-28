import Head from "next/head";

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
			<p>This is a page all about {pokemon?.name} </p>
			<div>
				<img
					src={pokemon?.sprites.front_default}
					alt='Squirtle Front Sprite'
				/>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise");
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		},
	};
}

export default Pokemon;
