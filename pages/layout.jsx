import Footer from './footer';
import Header from './header';
import Title from './title';

export default function Layout({ children }) {
	return (
		<>
			<Title />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
