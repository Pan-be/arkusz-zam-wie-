import styles from "./OrderInput.module.css"

const OrderInput = (props) => {
	return (
		<div className={styles.input}>
			<label for='order'>Zamawiana ilość</label>
			<input type='number' name='order' />
		</div>
	)
}

export default OrderInput
