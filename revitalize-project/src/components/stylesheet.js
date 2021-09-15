import styled from "styled-components";
import Love from "./assets/love.jpg";

const Home = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Open+Sans:wght@300;400;600&display=swap");
  font-family: "Open Sans", sans-serif;

  .container {
    width: 100%;
    height: 100vh;
    background: url(${Love});
    background-position: center;
    background-size: cover;
  }
  .overlay_open {
    top: 0;
    width: 95vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background: #f3f3f3;
    display: flex;
  }
  h1 {
    font-family: "Merriweather", serif;
    font-weight: 300;
    font-size: 76px;
    color: #33362f;
  }
  .text {
    padding-left: 36px;
    margin-top: 10%;
    border-left: 3px double;
    margin-left: 7%;
    height: 350px;
  }
  h2 {
    padding-top: 1em;
    font-weight: 200;
  }
  button {
    height: 40px;
    width: 40px;
    border: 0;
  }
  .theme-colors {
    height: 400px;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 0.95em;
    margin-top: 5em;
  }
  .active {
    border: 3px solid #f3f3f3;
    padding: 16px;
  }

  @media only screen and (max-width: 590px) {
    .overlay_open {
      display: block;
    }
    .theme-colors {
      flex-direction: row;
      width: 92%;
      margin-top: 1em;
    }
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 24px;
    }
  }
`;

const DarkHome = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Open+Sans:wght@300;400;600&display=swap");
  font-family: "Open Sans", sans-serif;

  .container {
    width: 100%;
    height: 100vh;
    background: url(${Love});
    background-position: center;
    background-size: cover;
  }
  .overlay_open {
    top: 0;
    width: 95vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background: #33362f;
    display: flex;
  }
  h1 {
    font-family: "Merriweather", serif;
    font-weight: 300;
    font-size: 76px;
    color: #f3f3f3;
  }
  .text {
    padding-left: 36px;
    margin-top: 10%;
    border-left: 3px double #f3f3f3;
    margin-left: 7%;
    height: 350px;
  }
  h2 {
    padding-top: 1em;
    font-weight: 200;
    color: #f3f3f3;
  }
  button {
    height: 40px;
    width: 40px;
    border: 0;
  }
  .theme-colors {
    height: 400px;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 0.95em;
    margin-top: 5em;
  }
  .active {
    border: 3px solid #f3f3f3;
    padding: 16px;
  }

  @media only screen and (max-width: 590px) {
    .overlay_open {
      display: block;
    }
    .theme-colors {
      flex-direction: row;
      width: 92%;
      margin-top: 1em;
    }
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 24px;
    }
  }
`;

const ToggleSwitch = styled.div`
  .toggle_container {
    margin: 2em;
   	border: 3px solid #0d0d0d;
    height: 44px;
    width: 80px;
    border-radius: 25px;
    position: absolute;
	z-index: 3;
	right: 0;
	margin-right: 5.2em
  }
  .inner_toggler {
    height: 38px;
    width: 38px;
    background: #33362F;
    border-radius: 50%;	
  }

  img{
	  padding: .5em;
	  filter: invert(1)
  }
  @media only screen and (max-width: 590px) {
   .toggle_container{
	margin-right: 2em
   }
`;

const DarkToggleSwitch = styled.div`
.toggle_container {
    margin: 2em;
   	border: 3px solid #f3f3f3;
    height: 44px;
    width: 80px;
    border-radius: 25px;
    position: absolute;
	z-index: 3;
	right: 0;
	margin-right: 5.2em
  }
  .inner_toggler {
    height: 38px;
    width: 38px;
    background: #f3f3f3;
    border-radius: 50%;	
  }

  img{
	  padding: .5em;
	//   filter: invert(1)
  }
  @media only screen and (max-width: 590px) {
   .toggle_container{
	margin-right: 2em
   }
`

export { Home, DarkHome, ToggleSwitch, DarkToggleSwitch };
