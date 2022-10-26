import Image from 'next/image';

export async function getStaticProps(context) {
	const res = await fetch(`http://localhost:3000/api/${context.params.id}`);
	const data = await res.json();

	return { props: { post: data } };
}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3000/api/data');
	const data = await res.json();
	const paths = data.map(post => ({ params: { id: post.id.toString() } }));
	return {
		paths: paths,
		fallback: false // can also be true or 'blocking'
	};
}

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};

export default function Data({ post }) {
	return (
		<div>
			<Image
				loader={myLoader}
				src={post.photo}
				width={300}
				height={300}
				priority={true}
			/>
			<h1>{post.name}</h1>
		</div>
	);
}

// const Post = () => {
// 	const router = useRouter();
// 	const pid = router.query;
// 	console.log(pid.pid);

// 	return <p>Post: {`${pid.pid}+${pid.foo}`}</p>;
// };
