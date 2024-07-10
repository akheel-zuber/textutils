import React, { useState } from 'react';
export default function TextForm(props) {
    // convert to uppercase
    const handleUpClick = () =>{
        // console.log("Upper Case was Clicked   " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success", "converted to uppercase")
    }

    const handleOnChange = (event)=>{
        // console.log("Onchange")
        setText(event.target.value)
    }

    // Convert to lower case
    const handleLoClick = () =>{
        let loText = text.toLowerCase();
        setText(loText);
        props.showAlert("success", "converted to lowercase")
    }

    // Change the color
    const changeColor = ()=>{
        const colour = "blue";
        document.getElementById('myBox').style.color = colour;
        props.showAlert("success", "color has been changed to blue")
    }

    const [text, setText] = useState('');
    
    // Copy the text
    const handleCopyClick = () =>{
        // text.select()
        navigator.clipboard.writeText(text);
        props.showAlert("success", "copied to clipboard")
    }

    // Remove Extra Spaces
    const removeSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "extra spaces have been removed")
    }

    // Clear the text
    const clear = ()=>{
        setText('')
        props.showAlert("success", "text has been clear")
    }

    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

    // text = "gfifb"; wrong
    // setText("new text")   right way
    return (
        <>
        <div style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2" disabled={text.length === 0}>Convert to Uppercase</button>
            <button onClick={handleLoClick} className="btn btn-primary mx-2 my-2" disabled={text.length === 0}>Convert to Lowercase</button>
            <button onClick={handleCopyClick} className="btn btn-primary mx-2 my-2" disabled={text.length === 0}>Copy to clipboard</button>
            <button onClick={removeSpaces} className="btn btn-primary mx-2 my-2" disabled={text.length === 0}>Remove Extra Spaces</button>
            <button onClick={changeColor} className="btn btn-primary mx-2 my-2" disabled={text.length === 0}>Change color</button>
            <button onClick={clear} className="btn btn-primary" disabled={text.length === 0}>Clear</button>
        </div>
        <div style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>Your Text Summary</h1>
            <p> <b>{wordCount}</b> words and {text.length} characters</p>
            <p>{0.08*text.split(/\s+/).filter((word) => word.length > 0)} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}