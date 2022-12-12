import styles from "./OrderInput.module.css"

const OrderInput = (props) => {
	const handleChange = (e) => {
		props.onTypeValue(props.ean, parseInt(e.target.value))
	}

	return (
		<div className={styles.input}>
			<label htmlFor='order'>
				<span className={styles.label}>Ilość</span>
			</label>
			<div className={styles["input-container"]}>
				<span
					className={styles.prev}
					onClick={() => props.onDecrement(props.ean)}></span>
				<span
					className={styles.next}
					onClick={() => props.onIncrement(props.ean)}></span>
				<div>
					<input
						type='number'
						name='order'
						min='0'
						value={props.amount}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default OrderInput
