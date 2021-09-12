import React, { useEffect, useRef } from "react";
import { skills } from "./skills";

import Me from "../assets/me.png";
import Behance from "../assets/Behance.png";
import LinkedIn from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import GitHub from "../assets/github.png";
import {
  Text,
  Container,
  CallToAction,
  FlexContainer,
  MySkills,
  ProjectsContainer,
} from "./StyleSheet";
import gsap from "gsap/all";

const Home = () => {

	let bubbleTextTop = useRef(null)


	useEffect(() => {
		gsap.to(bubbleTextTop, {
			opacity: 1,
			duration: .5

		})
		
	})

	const stuff = skills.map(skill => (
		<ProjectsContainer>
		<div className="skill_cards" style={{display: "inlineBlock"}}>
			<h1 className="project_text" style={{fontSize: "24px", textAlign: "center", paddingTop: "2em"}}>{skill.skill}</h1>
		  
		</div>
	</ProjectsContainer>
	))

  return (
    <>
      <Container>
        <div
          style={{ width: "98%", margin: "0 auto" }}
          className="margin_container"
        >
          <FlexContainer>
            <Text>
			<div class="fade_in_top">
			<h1  className="bubble_top"  ref={el => {bubbleTextTop = el}}>
                Welcome To my world 🌎 . Nice to Meet you 👋.
              </h1>
              <h1 className="bubble_bottom">
                I am full-stack developer that brings a passion for programming
                and a long love of design to the table. I hope you can see why
                my projects below could turn into me being a valuable member of your
                team! Extremely willing to relocate. Let's get in touch!
              </h1>
			</div>
              
            </Text>
            <CallToAction>
              <div className="cta_container">
                <img src={Me} alt="Man with glasses flashing the peace" />
                <h1>Find me on these applications</h1>
                <div className="socials"></div>
                <div className="socials_flex">
                  <div className="icons socials_one">
                    <a href="#">
                      <img src={LinkedIn} alt="My LinkedIn" />
                    </a>
                  </div>
                  <div className="icons socials_two">
                    <a href="#">
                      <img src={Twitter} alt="My Twitter" />
                    </a>
                  </div>
                  <div className="icons socials_three">
                    <a href="#">
                      <img src={Behance} alt="My Behance Profile" />
                    </a>
                  </div>
                  <div className="icons socials_four">
                    <a href="#">
                      <img
                        style={{ width: "40px" }}
                        src={GitHub}
                        alt="My GitHub profile"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </CallToAction>
          </FlexContainer>
          <MySkills>
            <div className="skills_container">
              <div className="box">
				  {stuff}
				  </div>
              
            </div>
          </MySkills>
		
        </div>
      </Container>
    </>
  );
};

export default Home;
