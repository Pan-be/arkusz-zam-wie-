import { useState } from "react"
import styles from "./OrderInput.module.css"

const OrderInput = (props) => {
	const [num, setNum] = useState(props.amount)
	const [multiplier, setMultiplier] = useState(1)

	const handleChange = (e) => {
		setNum(parseInt(e.target.value))
		setMultiplier(num)
		return multiplier
	}

	return (
		<div className={styles.input}>
			<label htmlFor='order'>Zamawiana ilość</label>
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
						// onChange={handleChange}
						onChange={() => props.onTypeValue(props.ean, props.amount)}
					/>
				</div>
			</div>
		</div>
	)
}

export default OrderInput
