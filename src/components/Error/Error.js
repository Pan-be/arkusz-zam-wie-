import Card from "../UI/Card"
import cardStyles from "../Games/Games.module.css"

const Loader = (props) => {
	return (
		<Card className={cardStyles.games}>
			<h1 style={{ color: "red" }}>{props.error}</h1>
		</Card>
	)
}

export default Loader
