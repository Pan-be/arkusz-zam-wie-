// import jsPDF from "jspdf"
import { useState, useEffect } from "react"
import CustomerDetails from "./components/CustomerDetails/CustomerDetails"
import Games from "./components/Games/GameList"

function App() {
	const [games, setGames] = useState([
		{
			id: "g1",
			ean: 5904305400136,
			title: "Brzdęk w kosmosie",
			package: 6,
			scd: 229.99,
			amount: 0,
		},
		{
			id: "g2",
			ean: 5904305400134,
			title: "Dobry Rok",
			package: 8,
			scd: 199,
			amount: 0,
		},
		{
			id: "g3",
			ean: 5904305400130,
			title: "Rollo",
			package: 24,
			scd: 39.9,
			amount: 0,
		},
	])

	const [orderProps, setOrderProps] = useState({
		gross: 0,
		discount: 0.35,
	})

	useEffect(() => {
		let discount = 0.35
		for (const game of games) {
			discount =
				discount +
				Math.floor((game.amount ? game.amount : 0) / game.package) * 0.02
		}

		if (discount > 0.45) {
			discount = 0.45
		}

		setOrderProps((prev) => ({
			...prev,
			discount: Math.round(discount * 100) / 100,
		}))
	}, [games])

	useEffect(() => {
		let sum = 0

		games.forEach((val) => {
			sum += (val.scd - val.scd * orderProps.discount) * val.amount
		})

		setOrderProps((prev) => ({
			...prev,
			gross: sum,
		}))
	}, [games])

	// let numb
	// const numGetter = (num) => {
	// 	// console.log(`${num} from App.js`)
	// 	if (num > 0) {
	// 		numb = num
	// 	}
	// 	return numb
	// }

	const incrementGame = (ean) => {
		setGames((games) => {
			return games.map((game) => {
				if (game.ean === ean) {
					return {
						...game,
						amount: game.amount + 1,
					}
				}
				return game
			})
		})
	}

	const decrementGame = (ean) => {
		setGames((games) => {
			return games.map((game) => {
				if (game.ean === ean && game.amount > 0) {
					return {
						...game,
						amount: game.amount - 1,
					}
				}
				return game
			})
		})
	}

	const typeValue = (ean, typedAmount) => {
		setGames((games) => {
			return games.map((game) => {
				if (game.ean === ean) {
					return {
						...game,
						amount: typedAmount,
					}
				}
				return game
			})
		})
	}

	// const totalValue = (ean, typedAmount) => {}

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
		}
		console.log(order)
	}

	return (
		<div className='App'>
			<form onSubmit={submitHandler}>
				<Games
					games={games}
					orderProps={orderProps}
					// onGetNum={numGetter}
					incrementGame={incrementGame}
					decrementGame={decrementGame}
					typeValue={typeValue}
				/>

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
