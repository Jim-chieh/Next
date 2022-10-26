import Image from 'next/image';

export async function getServerSideProps() {
	const res = await fetch('https://mydb.vercel.app/api/data');
	const data = await res.json();

	return { props: { post: data } };
}

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};

export default function Home({ post }) {
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
