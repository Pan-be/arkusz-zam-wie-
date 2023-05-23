export const roundTo = (n, digits) => {
	if (digits === undefined) {
		digits = 0
	}

	const multiplicator = Math.pow(10, digits)
	n = parseFloat((n * multiplicator).toFixed(11))
	return (Math.round(n) / multiplicator).toFixed(2)
}
