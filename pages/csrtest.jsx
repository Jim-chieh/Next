import { useEffect, useState } from 'react';
import Title from './title';

export default function Home() {
	const [post, setPost] = useState();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then(res => res.json())
			.then(res => setPost(res));
	}, []);

	return (
		<div>
			<Title />
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
}
