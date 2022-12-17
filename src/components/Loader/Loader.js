import Card from "../UI/Card"
import styles from "./Loader.module.css"
import cardStyles from "../Games/Games.module.css"

const Loader = () => {
	return (
		<Card className={cardStyles.games}>
			<div className={styles.loaderContainer}>
				<div className={styles["lds-spinner"]}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</Card>
	)
}

export default Loader
