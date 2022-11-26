import styles from "./CustomerDetails.module.css"

const CustomerDetails = (props) => {
	return (
		<div className={styles["customers-details"]}>
			<div className={styles["customer-details__controls"]}>
				<div className={styles["customer-details__control"]}>
					<label htmlFor='name'>Nazwa Firmy:</label>
					<input type='text' name='name' />
				</div>
				<div className={styles["customer-details__control"]}>
					<label htmlFor='nip'>NIP:</label>
					<input type='text' name='nip' />
				</div>
				<div className={styles["customer-details__control"]}>
					<label htmlFor='address'>Adres dostawy:</label>
					<textarea
						name='address'
						rows='3'
						placeholder='Proszę podać, jeśli jest inny niż siedziba firmy.'
					/>
				</div>
				<div className={styles["customer-details__control"]}>
					<label htmlFor='comments'>Uwagi do zamówienia:</label>
					<textarea
						name='comments'
						rows='3'
						placeholder='np data dostawy, prośba o awizację, informacja o egzemplarzach pokazowych'
					/>
				</div>
				<div className={styles["form__actions"]}>
					<label id='submit' htmlFor='submit'>
						Po kliknięciu w przycisk <span>generuj</span>, zostanie wygenerowane
						zamówienie w formacie PDF - proszę je przesłać na adres e-mail
						obsługującego przedstawiciela wydawnictwa Lucrum Games:
					</label>
					<button onClick={props.pdfGenerator} name='submit'>
						<span>generuj</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CustomerDetails
