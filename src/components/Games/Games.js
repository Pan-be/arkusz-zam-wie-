import Game from "./Game"
import Card from "../UI/Card"
import styles from "./Games.module.css"

const Games = (props) => {
	const saveNumHandler = (num) => {
		props.onGetNum(num)
	}
	return (
		<Card className={styles.games}>
			<Game
				title={props.games[0].title}
				EAN={props.games[0].EAN}
				package={props.games[0].package}
				scd={props.games[0].scd}
				onSaveNum={saveNumHandler}
			/>
		</Card>
	)
}

export default Games
