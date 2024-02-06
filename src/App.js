import PageHome from "./page/PageHome";
import BtnWhatsApp from "./components/buttons/BtnWhatsApp";
import Footer from "./navbar/Footer";
import NavBar from "./navbar/NavBar"

export default function App() {
	return (
		<div className="max-w-full">
			<NavBar />
			<PageHome/>
			<Footer/>
			<BtnWhatsApp/>
		</div>
	)
}