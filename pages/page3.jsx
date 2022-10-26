import { useEffect, useState } from 'react';

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/7');
	const data = await res.json();

	return { props: { post: data } };
}

export default function Home({ post }) {
	const [newPost, setNewPost] = useState();
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(res => res.json())
			.then(res => setNewPost(res));
	}, []);
	console.log(newPost);
	return (
		<div>
			<h1>{post?.title}</h1>
			<h2>{newPost?.body}</h2>
			<p>{post?.body}</p>
		</div>
	);
}
