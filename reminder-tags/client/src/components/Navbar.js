import React, {useState} from 'react'
import { Nav } from './hooks/stylesheet'
import grid from "../assets/grid.png"



export default function Navbar() {

	const [toggle, setToggle] = useState(false)


	function handleToggle(){
		setToggle(!toggle)
	}

	return (
		<div>
			<Nav>
				<h1>noteMe!</h1>
				<div className="flex">
					<img src={grid} alt="" />
				</div>
			</Nav>
		</div>
	)
}
