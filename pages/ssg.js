import Image from 'next/image';

export async function getStaticProps() {
	const res = await fetch('https://mydb.vercel.app/api/hello');
	const data = await res.json();

	return { props: { post: data } };
}

// export async function getStaticPaths() {
// 	const res = await fetch('http://localhost:3000/api/data');
// 	const data = await res.json();
// 	const paths = data.map(post => ({ params: { id: post.id } }));
// 	return {
// 		paths: paths,
// 		fallback: false // can also be true or 'blocking'
// 	};
// }

const myLoader = ({ src, width }) => {
	return `${src}?w=${width}`;
};

export default function Data({ post }) {
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
		</div>
	);
}

//https://ithelp.ithome.com.tw/articles/10267894
