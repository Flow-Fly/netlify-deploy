import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Routes>
				<Route path="/" element={<h1>Homepage</h1>} />
				<Route path="/somewhere" element={<h1>We are on a path</h1>} />
			</Routes>
		</>
	)
}

export default App
