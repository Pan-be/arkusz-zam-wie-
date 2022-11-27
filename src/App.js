// import jsPDF from "jspdf"
import { useState } from "react"
import CustomerDetails from "./components/CustomerDetails/CustomerDetails"
import Games from "./components/Games/Games"

function App() {
	const games = [
		{ id: "g1", title: "Brzdęk w kosmosie", package: 6, scd: 229.99 },
		{ id: "g2", title: "Dobry Rok", package: 8, scd: 199 },
		{ id: "g3", title: "Rollo", package: 24, scd: 39.9 },
	]
	let numb
	const numGetter = (num) => {
		console.log(`${num} from App.js`)
		numb = num
		return numb
	}

	// const generatePDF = () => {
	// 	// console.log("clicked")
	// 	// const doc = new jsPDF("l", "pt", "a4")
	// 	// doc.html(document.querySelector("#app"), {
	// 	// 	callback: function (pdf) {
	// 	// 		pdf.save("zamówienie.pdf")
	// 	// 	},
	// 	// })
	// 	print("a", "app")
	// }
	const [comName, setComName] = useState("")
	const [comNIP, setComNIP] = useState("")
	const [comAddress, setComAddress] = useState("")
	const [comComments, setComComments] = useState("")

	const comNameHandler = (e) => {
		setComName(e.target.value)
		console.log(comName)
	}
	const comNIPHandler = (e) => {
		setComNIP(e.target.value)
	}
	const comAddressHandler = (e) => {
		setComAddress(e.target.value)
	}
	const comCommentsHandler = (e) => {
		setComComments(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		const order = {
			comName: comName,
			comNIP: comNIP,
			comAddress: comAddress,
			comComments: comComments,
			game: games[0].title,
			numberOfGames: numb,
		}
		console.log(order)
	}

	return (
		<div className='App'>
			<form onSubmit={submitHandler}>
				<Games games={games} onGetNum={numGetter} />
				<CustomerDetails
					comNameHandler={comNameHandler}
					comNIPHandler={comNIPHandler}
					comAddressHandler={comAddressHandler}
					comCommentsHandler={comCommentsHandler}
				/>
			</form>
		</div>
	)
}

export default App
