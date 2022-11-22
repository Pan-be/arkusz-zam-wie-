import styles from "./Game.module.css"
import Card from "./Card.js"

const Game = (props) => {
	return (
		<Card className={styles.game}>
			<div>{props.title}</div>
			<div className={styles["game-packing"]}>
				<h2>Pakowane: {props.package}</h2>
				<div className={styles["game-price"]}>SCD: {props.scd}</div>
			</div>
		</Card>
	)
}

export default Game
