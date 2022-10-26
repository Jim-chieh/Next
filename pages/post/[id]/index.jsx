import Image from 'next/image';
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
	const res = await fetch(`https://mydb.vercel.app/api/hello`);
	const data = await res.json();

	return { props: { post: data } };
}

export async function getStaticPaths() {
	const res = await fetch('https://mydb.vercel.app/api/hello');
	const data = await res.json();
	const paths = data.map(post => ({ params: { id: post.id.toString() } }));
	return {
		paths: paths,
		fallback: false // can also be true or 'blocking'
	};
}

const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Data({ post }) {
	const router = useRouter();
	console.log(router.query.id);
	const resObj = post.filter(data => data.id.toString() === router.query.id);
	const newObj = resObj[0];
	console.log(newObj);
	return (
		<div>
			<Image
				loader={myLoader}
				src={newObj.photo}
				width={300}
				height={300}
				priority={true}
			/>
			<h1>{newObj.name}</h1>
		</div>
	);
}

// const Post = () => {
// 	const router = useRouter();
// 	const pid = router.query;
// 	console.log(pid.pid);

// 	return <p>Post: {`${pid.pid}+${pid.foo}`}</p>;
// };
