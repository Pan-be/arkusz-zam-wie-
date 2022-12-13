import Card from "../UI/Card"
import gameStyles from "../Games/Game.module.css"
import styles from "./Summary.module.css"

const Summary = (props) => {
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
	const price = props.gross
	return (
		<Card className={gameStyles.game + " " + styles.summary}>
			<h2>Razem</h2>
			<div className={styles.net}>
				Netto: <br />
				{roundTo(price / 1.23, 2)}zł
			</div>
			<div className={gameStyles["game-price"]}>
				Brutto: <br />
				{roundTo(price, 2)}zł
			</div>
		</Card>
	)
}

export default Summary
