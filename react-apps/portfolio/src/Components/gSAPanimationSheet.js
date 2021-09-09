import gsap from "gsap"
import { useRef } from 'react'



	// let letAnimationBounce = useRef(null)
	// let flipInCards = useRef(null)
	
	function TextOne(){
		let upperTextFadeIn = useRef(null)
		gsap.to(upperTextFadeIn, {
			opacity: 1,
			delay: 500
		})
	}
	
	function TextTwo(){
			let lowerTextFadeIn = useRef(null)
			gsap.to(lowerTextFadeIn, {
				opacity: 1
			})
		}
			// gsap.to(MyBounce, {
			// 	duration: 2,
			// 	x: 200,
				
			// })

	

	



export { TextOne, TextTwo}

