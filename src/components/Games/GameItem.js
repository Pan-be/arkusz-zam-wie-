import styles from "./Game.module.css"
import Card from "../UI/Card.js"
import OrderInput from "../OrderInput"

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

	const discount = props.discount
	const scd = props.scd
	const gameName = props.title
	const ean = props.ean
	const price = roundTo(scd - scd * discount, 2)
	const packages = props.package

	return (
		<Card className={styles.game}>
			<h2>{gameName}</h2>
			<div className={styles["game-details"]}>
				<div className={styles.ean + " " + styles["game-prop"]}>
					EAN: <span>{ean}</span>
				</div>
				<div className={styles.package + " " + styles["game-prop"]}>
					Pakowane: <span>{packages}</span>
				</div>
				<div className={styles.scd + " " + styles["game-prop"]}>
					SCD: <span>{props.scd}zł</span>
				</div>
				<div className={styles.discount + " " + styles["game-prop"]}>
					Rabat: <span>{100 * discount}%</span>
				</div>
				<div className={styles.price + " " + styles["game-prop"]}>
					Cena: <span>{price}zł</span>
				</div>
			</div>
			<div className={styles["game-price"]}>
				Wartość: <br /> {roundTo(price * props.amount, 2)}zł
			</div>

			<OrderInput
				ean={props.ean}
				amount={props.amount}
				onIncrement={props.onIncrement}
				onDecrement={props.onDecrement}
				onTypeValue={props.typeValue}
			/>
		</Card>
	)
}

export default Game
