import Title from './title';

export async function getServerSideProps({ req, res }) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	);

	return {
		props: {
			time: new Date().toLocaleString()
		}
	};
}

export default function Index({ time }) {
	return (
		<main>
			<Title />
			<h1>SSR Caching with Next.js</h1>
			<time dateTime={time}>{time}</time>
		</main>
	);
}