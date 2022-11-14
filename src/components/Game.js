import styles from "./Game.module.css"

const Game = (props) => {
	return (
		<div className={styles.game}>
			<div>Nazwa gry</div>
			<div className={styles["game-packing"]}>
				<h2>Pakowane: </h2>
				<div className={styles["game-price"]}>SCD: </div>
			</div>
		</div>
	)
}

export default Game
