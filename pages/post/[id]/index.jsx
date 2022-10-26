// export async function getStaticPaths(pid) {
// 	const paths = { params: { id: pid } };

// 	return {
// 		paths,
// 		fallback: false
// 	};
// }

export async function getServerSideProps(context) {
	console.log(context.params.id);
	const res = await fetch(`http://localhost:3000/api/${context.params.id}`);
	const data = await res.json();

	return { props: { post: data } };
}

export default function Home({ post }) {
	console.log(post);
	return (
		<div>
			<img src={post?.photo} />
			<p>{post?.name}</p>
		</div>
	);
}

// const Post = () => {
// 	const router = useRouter();
// 	const pid = router.query;
// 	console.log(pid.pid);

// 	return <p>Post: {`${pid.pid}+${pid.foo}`}</p>;
// };
