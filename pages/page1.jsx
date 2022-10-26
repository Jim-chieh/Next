import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
	const [post, setPost] = useState();
	const router = useRouter();
	console.log(router.query);

	useEffect(() => {
		fetch('https://mydb.vercel.app/api/data')
			.then(res => res.json())
			.then(res => setPost(res));
	}, []);

	return (
		<div>
			{post?.map(item => (
				<div key={item.id}>
					<img src={item.photo} />
					<h1>{item.name}</h1>
				</div>
			))}
		</div>
	);
}
