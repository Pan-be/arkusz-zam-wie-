import Game from "./GameItem"
import Card from "../UI/Card"
import styles from "./Games.module.css"
import Summary from "../Summary/Summary"

const Games = (props) => {
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
						onIncrement={props.incrementGame}
						onDecrement={props.decrementGame}
						typeValue={props.typeValue}
						discount={props.orderProps.discount}
						gross={props.orderProps.gross}
					/>
				)
			})}
			<Summary gross={props.orderProps.gross} />
		</Card>
	)
}

export default Games
