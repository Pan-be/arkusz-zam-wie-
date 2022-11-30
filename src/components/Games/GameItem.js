import styles from "./Game.module.css"
import Card from "../UI/Card.js"
import OrderInput from "../OrderInput"
import { useState } from "react"

const Game = (props) => {
	//   ---- round helper
	const roundTo = (n, digits) => {
		if (digits === undefined) {
			digits = 0
		}

		const multiplicator = Math.pow(10, digits)
		n = parseFloat((n * multiplicator).toFixed(11))
		return Math.round(n) / multiplicator
	}
	// -----

	// let numOfGames
	// const getNumberOfGame = (num) => {
	// 	if (num > 0) {
	// 		numOfGames = num
	// 	}
	// }
	const discount = 0.35
	const scd = props.scd
	const gameName = props.title
	const ean = props.ean
	const price = roundTo(scd - scd * discount, 2)

	// const saveNumOfGamesHandler = (num) => {
	// 	props.onSaveNum(num)
	// 	return num
	// }

	return (
		<Card className={styles.game}>
			<h2>{gameName}</h2>
			<div className={styles["game-packing"]}>
				<div>
					EAN: <span>{ean}</span>
				</div>
				<div>
					Pakowane: <span>{props.package}</span>
				</div>
				<div>
					SCD: <span>{props.scd}zł</span>
				</div>
				<div>
					Rabat: <span>{100 * discount}%</span>
				</div>
				<div>
					Cena: <span>{price}zł</span>
				</div>
				<div className={styles["game-price"]}>
					Wartość: {roundTo(price * props.amount, 2)}zł
				</div>
			</div>
			<OrderInput
				ean={props.ean}
				amount={props.amount}
				// onSaveNumOfGames={saveNumOfGamesHandler}
				onIncrement={props.onIncrement}
				onDecrement={props.onDecrement}
				onTypeValue={props.typeValue}
			/>
		</Card>
	)
}

export default Game