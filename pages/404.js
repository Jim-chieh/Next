import Image from 'next/image';

const imgLoader = ({ src }) => {
	return src;
};

function NotFound() {
	return (
		<div>
			<Image
				loader={imgLoader}
				src={
					'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1603293781630.jpg'
				}
				width={500}
				height={500}
			/>
		</div>
	);
}

export default NotFound;
