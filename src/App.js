import jsPDF from "jspdf"
import CustomerDetails from "./components/CustomerDetails/CustomerDetails"
import Games from "./components/Games/Games"

function App() {
	const games = [
		{ id: "g1", title: "Brzdęk w kosmosie", package: 6, scd: 229.99 },
		{ id: "g2", title: "Dobry Rok", package: 8, scd: 199 },
		{ id: "g3", title: "Rollo", package: 24, scd: 39.9 },
	]

	const generatePDF = () => {
		console.log("clicked")
		const doc = new jsPDF("l", "pt", "a4")
		doc.html(document.querySelector("#app"), {
			callback: function (pdf) {
				pdf.save("zamówienie.pdf")
			},
		})
	}

	return (
		<div className='App' id='app'>
			<Games games={games} />
			<CustomerDetails pdfGenerator={generatePDF} />
		</div>
	)
}

export default App
