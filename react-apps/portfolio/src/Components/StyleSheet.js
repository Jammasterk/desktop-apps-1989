import styled from "styled-components";

// Light Theme Styles

const Text = styled.div`
  .bubble_top,
  .bubble_bottom {
    background: #495057;
    padding: 1.5em;
    color: #f8f9fa;
  }

  .bubble_top {
    border-radius: 25px 25px 0 25px;
  }

  .bubble_bottom {
    border-radius: 25px 0 25px 25px;
  }
  .text_container {
  }
  .fade_in_top {
  }
`;

const Container = styled.div`
  width: 100vw;
`;

const CallToAction = styled.div`
  padding: 3em 6em;
  .socials_flex {
    display: flex;
  }

  .cta_container {
    border: 8px solid #495057;
    border-radius: 25px;
    padding: 2.5em;
  }
  .icons {
    padding: 0 1em;
  }

  .socials_one {
    padding: 0;
  }
`;

const MySkills = styled.div`
.skills_container {
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 0 auto;
	
}
.box{
	 width: 94vw;
	 margin: 2em;
	 display: grid;
	grid-template-columns: repeat(4, 1fr);
	// grid-gap: .25em
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  margin: 0 auto;
`;

const ProjectsContainer = styled.div`
border: 8px solid #495057;
border-radius: 25px;
width: 200px;
height: 200px;
font-family: "Open Sans", sans-serif;
font-weight: 300

}

`;

export {
  FlexContainer,
  CallToAction,
  Container,
  Text,
  MySkills,
  ProjectsContainer,
};
