import React from "react"
import { Preview, print } from "react-html2pdf"

const Pdf = () => {
	const generatePDF = () => {
		print("zamówienie", "pdf")
	}
	return (
		<Preview>
			<div id='order'>something</div>
			<button onClick={generatePDF} />
		</Preview>
	)
}

export default Pdf
