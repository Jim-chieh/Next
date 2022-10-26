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
				<Link href="/page1">page1</Link>
			</li>
			<li>
				<Link href="/page2">page2</Link>
			</li>
			<li>
				<Link href="/page3">page3</Link>
			</li>
			<li>
				<Link href={`/post/${getRandomInt()}`}>隨機</Link>
			</li>
		</ul>
	);
}
