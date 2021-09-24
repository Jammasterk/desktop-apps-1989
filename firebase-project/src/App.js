import React from "react"
import {initializeApp} from "firebase/app"
import {firebaseConfig}from "./firebase"

export default function App(){

const admin = initializeApp(firebaseConfig)

console.log(admin)

	return(
		<div>This is a new app</div>
	)
}