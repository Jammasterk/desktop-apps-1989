import styled from "styled-components";
import color from "randomcolor";

const Nav = styled.div`
  width: 100vw;
  height: 60px;
  background: #0d0d0d;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding-top: 0.5em;
  h1 {
    color: #f3f3f3;
    font-family: "Open Sans", sans-serif;
    padding-left: 0.25em;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    padding-right: 8px;
    height: 40px;
    position: absolute;
    right: 0;
  }
  img {
    width: 36px;
    height: 36px;
  }
`;

// NOTE COMPONENTS

const Form = styled.div`
  .container {
    height: 100%;
    width: 100vw;
    background: hsl(217.09, 100%, 89.22%);
  }
  form {
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 90%;
    height: 125px;
    margin: 0 auto;
    padding-top: 0.5em;
  }
  .input_container {
    width: 100%;
    padding: 0 0.75em;
  }
  input {
    width: 100%;
    display: flex;
    background: transparent;
    border: 3px solid white;
    height: 36px;
    border-radius: 25px;
    margin-top: 0.5em;
	padding-left: .75em
  }
  button {
    // width: 50%;
    border-radius: 25px;
    margin-top: 0.75em;
    border: none;
	background: none
  }
  input:focus {
    outline: none;
    padding-left: 1em;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: ${color};
  }
  .button_container{
	  width: 100%;
	  display: flex;
	  justify-content: space-between
  }
`;

const NoteData = styled.div`
  li {
    font-family: "Open Sans", sans-serif;
    padding: 0.75em 0.5em;
    border-radius: 5px;
    opacity: 0.6;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    width: 100%;
    margin: 0 auto;
    list-style: square;
	font-weight: 700
  }
  ul {
    margin: 0 auto;
  }

  img {
    width: 18px;
  }
  .inner_list {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0;
  }
  .icons {
    padding-top: 0.75em;
    // width: 100px;
    padding-right: 0.5em;
  }
`;

export { Nav, Form, NoteData };
