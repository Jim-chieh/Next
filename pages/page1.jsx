import { useEffect, useState } from 'react';
import Title from './title';

export default function Home() {
	const [post, setPost] = useState();

	useEffect(() => {
		fetch('http://localhost:3000/api/data')
			.then(res => res.json())
			.then(res => setPost(res));
	}, []);

	return (
		<div>
			<Title />
			{post?.map(item => (
				<div key={item.id}>
					<img src={item.photo} />
					<h1>{item.name}</h1>
				</div>
			))}
		</div>
	);
}
