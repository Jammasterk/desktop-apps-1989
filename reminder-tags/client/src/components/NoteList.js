import React from "react";
import notes from "../sampleListData";
import { NoteData } from "./hooks/stylesheet";
import Check from "../assets/check.png";
import Delete from "../assets/delete.png";

export default function NoteList() {
  const result = notes.map((note) => (
    <NoteData>
      <ul>
        <div className="inner_list">
          <li
		   key={note.id}
            style={
              note.completed === true
                ? {
                    textDecoration: "line-through",
                    color: "#E76F51",
                    opacity: 1,
                  }
                : { textDecoration: "none" }
            }
          >
            {note.title}
          </li>
          <div className="icons">
			  {note.completed === false ? <img src={Check} alt="" />: <img src={Delete} alt="" />}
            
            
          </div>
        </div>
      </ul>
    </NoteData>
  ));

  return <div>{result}</div>;
}
