import React, { useState } from 'react'

export default function WordCounter(props) {
    const [text,setText]=useState("");
    const wordCount=text.split(" ").filter(Boolean).length;
    const handleTextChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <div
        className="form-group">
            <h3>{props.heading}</h3>
    <label for="Area"></label>
    <textarea className="form-control" onChange={handleTextChange} id="Area" rows="6"></textarea>
    <p > Word count :{wordCount}</p>
      
    </div>
  )
}
