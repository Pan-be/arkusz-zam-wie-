import styles from "./Game.module.css"

const Game = (props) => {
	return (
		<div className={styles.game}>
			<div>{props.title}</div>
			<div className={styles["game-packing"]}>
				<h2>Pakowane: {props.package}</h2>
				<div className={styles["game-price"]}>SCD: {props.scd}</div>
			</div>
		</div>
	)
}

export default Game
