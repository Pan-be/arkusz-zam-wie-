import { useState } from "react"
import styles from "./OrderInput.module.css"

const OrderInput = (props) => {
	const [num, setNum] = useState("")
	const addition = () => {
		console.log("added")
		setNum(parseInt(num + 1))
	}

	const substraction = () => {
		if (num > 0) {
			setNum(parseInt(num - 1))
		}
	}
	const handleChange = (e) => {
		setNum(parseInt(e.target.value))
	}
	return (
		<div className={styles.input}>
			<label htmlFor='order'>Zamawiana ilość</label>
			<div className={styles["input-container"]}>
				<span className={styles.prev} onClick={substraction}></span>
				<span className={styles.next} onClick={addition}></span>
				<div>
					<input
						type='number'
						name='order'
						min='0'
						value={num}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default OrderInput
