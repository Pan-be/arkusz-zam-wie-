import Game from "Game"
import styles from "./Games.module.css"

const Games = (props) => {
	return (
		<div className={styles.games}>
			<Game
				title={props.games[0].title}
				package={props.games[0].package}
				scd={props.games[0].scd}
			/>
		</div>
	)
}

export default Games
