import React from "react";
import { Form } from "./hooks/stylesheet";
import Add from "../assets/plus.png";
import brush from "../assets/paintpalette.png";

import Navbar from "./Navbar";
import NoteList from "./NoteList";

export default function NoteForm() {
  return (
    <>
      <Navbar />
      <Form>
        <div className="container">
          <form action="">
            <div className="input_container">
              <input type="text"  placeholder="Add note..."/>
              <div className="button_container">
                <button>
                  <img src={Add} alt="" />
                </button>
                <button>
                  <img style={{ width: "36px" }} src={brush} alt="" />
                </button>
              </div>
            </div>
          </form>

          <NoteList />
        </div>
      </Form>
    </>
  );
}
