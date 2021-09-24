import React, {useState} from 'react'
import axios from "axios"

export default function App() {

	const [result, setResult] = useState([])

	axios.get("/user")
	.then(res => setResult(res.data))
	
	return (
		<div>
			{result.map(res => (
				<div>
					<h1>{res.username}</h1>
					<p>{res.password}</p>
				</div>
			))}
		</div>
	)
}
