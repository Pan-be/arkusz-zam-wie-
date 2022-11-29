import Game from "./GameItem"
import Card from "../UI/Card"
import styles from "./Games.module.css"

const Games = (props) => {
	const saveNumHandler = (num) => {
		props.onGetNum(num)
	}
	return (
		<Card className={styles.games}>
			{props.games.map((game) => {
				return (
					<Game
						key={game.ean}
						title={game.title}
						ean={game.ean}
						package={game.package}
						scd={game.scd}
						amount={game.amount}
						onSaveNum={saveNumHandler}
						onIncrement={props.incrementGame}
						onDecrement={props.decrementGame}
					/>
				)
			})}
		</Card>
	)
}

export default Games
