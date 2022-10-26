import '../styles/globals.css';
import Footer from './footer';
import Header from './header';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;

