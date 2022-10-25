// export async function getStaticPaths(pid) {
// 	const paths = { params: { id: pid } };

// 	return {
// 		paths,
// 		fallback: false
// 	};
// }

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	);
	const data = await res.json();

	return { props: { post: data } };
}

export default function Home({ post }) {
	console.log(post);
	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
}

// const Post = () => {
// 	const router = useRouter();
// 	const pid = router.query;
// 	console.log(pid.pid);

// 	return <p>Post: {`${pid.pid}+${pid.foo}`}</p>;
// };
