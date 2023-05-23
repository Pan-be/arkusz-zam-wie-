import Card from "../UI/Card"
import gameStyles from "../Games/Game.module.css"
import styles from "./Summary.module.css"
import { roundTo } from "../../Utilities/helpers"

const Summary = (props) => {
	const price = props.gross
	return (
		<Card className={gameStyles.game + " " + styles.summary}>
			<h2>Razem</h2>
			<div className={styles.net}>
				Netto: <br />
				{roundTo((price ? price : 0) / 1.23, 2)}zł
			</div>
			<div className={gameStyles["game-price"]}>
				Brutto: <br />
				{roundTo(price ? price : 0, 2)}zł
			</div>
		</Card>
	)
}

export default Summary
