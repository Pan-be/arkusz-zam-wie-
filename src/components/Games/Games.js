import Game from "./Game"
import Card from "../UI/Card"
import styles from "./Games.module.css"

const Games = (props) => {
	return (
		<Card className={styles.games}>
			<Game
				title={props.games[0].title}
				package={props.games[0].package}
				scd={props.games[0].scd}
			/>
		</Card>
	)
}

export default Games