import Link from 'next/link';

export default function Header() {
	function getRandomInt() {
		return Math.floor(Math.random() * 11);
	}
	return (
		<ul>
			<li>
				<Link href="/">點我回首頁</Link>
			</li>
			<li>
				<Link href="/page1">csr</Link>
			</li>
			<li>
				<Link href="/page2">ssg</Link>
			</li>
			<li>
				<Link href="/page3">ssr</Link>
			</li>
			<li>
				<Link href={`/post/${getRandomInt()}`}>隨機</Link>
			</li>
		</ul>
	);
}
