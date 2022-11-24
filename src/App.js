import Games from "./components/Games/Games"

function App() {
	const games = [
		{ id: "g1", title: "Brzdęk w kosmosie", package: 6, scd: 229.99 },
		{ id: "g2", title: "Dobry Rok", package: 8, scd: 199 },
		{ id: "g3", title: "Rollo", package: 24, scd: 39.9 },
	]

	return (
		<div className='App'>
			<Games games={games} />
		</div>
	)
}

export default App
