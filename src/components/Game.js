import styles from "./Game.module.css"
import Card from "./Card.js"
import OrderInput from "./OrderInput"

const Game = (props) => {
	return (
		<Card className={styles.game}>
			<h2>{props.title}</h2>
			<div className={styles["game-packing"]}>
				<div>
					Pakowane: <span>{props.package}</span>
				</div>
				<div>
					SCD: <span>{props.scd}zł</span>
				</div>
				<div>
					Rabat: <span>35%</span>
				</div>
				<div>
					Cena: <span>{props.scd}zł</span>
				</div>
				<div className={styles["game-price"]}>Wartość: {props.scd}zł</div>
			</div>
			<OrderInput />
		</Card>
	)
}

export default Game
