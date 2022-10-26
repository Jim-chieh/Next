import Image from 'next/image';
import { useEffect, useState } from 'react';

export async function getServerSideProps() {
	const res = await fetch('https://mydb.vercel.app/api/data');
	const data = await res.json();

	return { props: { post: data } };
}

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};

export default function Home({ post }) {
	const [newPost, setNewPost] = useState();
	useEffect(() => {
		fetch('http://localhost:3000/api/7')
			.then(res => res.json())
			.then(res => setNewPost(res));
	}, []);
	return (
		<div>
			{post?.map(item => (
				<div key={item.id}>
					<Image
						loader={myLoader}
						src={item.photo}
						width={300}
						height={300}
						priority={true}
					/>

					<h1>{item.name}</h1>
				</div>
			))}
			{/* <img src={newPost?.photo} /> */}
		</div>
	);
}
