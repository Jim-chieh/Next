import Title from './title';

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/repos/vercel/next.js');
	const data = await res.json();

	return { props: { post: data } };
}

export default function Data({ post }) {
	return (
		<div>
			<Title />
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
}

//https://ithelp.ithome.com.tw/articles/10267894
