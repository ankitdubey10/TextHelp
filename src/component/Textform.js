// import React from 'react'
// import  PropTypes  from 'prop-types'
import React, {useState} from "react"
export default function Textform(props) {

    const handleClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const lowerClick = () => {
        // console.log("Lowercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const textClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const pasteText = () =>{
        console.log("I am pasting");
        // var text = document.getElementsByTagName('myBox');
        document.navigator.clipboard.readText();
    }

    const handleCopy = () => {
        console.log("I am copying")
        var textCopy = document.getElementById("myBox");
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
        props.showAlert("Entire text is Copied.", "success")
    }

    const extraSpace = () => {
        console.log("Removing extra space");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.", "success")
    }
    // const getEmail = () => {
        
    //     let newText = text.search('@');
    //     setText(newText);
    // }
    const handleOnChange = (event) => {
        console.log("handle on change"); //when we will try to write something ont he text area
        setText(event.target.value);
        // props.showAlert()
    }

    const [text, setText] = useState('');
    //state can be udate with only the unction manual is not alowed 
    // function -- setText('ankit dubey'); this will work
    // text = " nw text" wrong

    // function wordCount () {
    //     var count = 0;
    //     var split = text.split(' ');
    //     for (var i = 0; i < split.length; i++) {
    //      if (split[i] !== "") {
    //       count ++;
    //      }
    //     }
    //     document.getElementById("showCount").innerHTML = count;
    //    }

    return (
    <>
    <div className="container my-3" style={ {color: props.mode === 'light' ? 'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-4">
            <textarea className="form-control" value={text} style = {{background: props.mode === 'light' ? 'white':'#121c32', color: props.mode === 'light' ? 'black':'white'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        {<div>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClick} >To Uppercase</button>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerClick} >To Lowercase</button>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={textClear} >Clear Text</button>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={pasteText}>Paste Text</button>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.split(' ').filter((element)=>{return element.length!==0}).length === 0} className="btn btn-primary mx-2 my-2" onClick={extraSpace}>Extra Space</button>
        </div>}
        {/* <button className="btn btn-primary mx-2" onClick={getEmail} >Get All Email</button> */}
          {/* mx-2 is bootstrap  class tha does some   */}
    </div>
    <div className="container my-3" style={ {color: props.mode === 'light' ? 'black':'white'}}>
        <h2> Your Text Summary </h2>
        <p>Your total number of words is {text.split(' ').filter((element)=>{return element.length!==0}).length}. Total characeter is {text.length}. </p>
        <p>{0.008*text.split(' ').length} minutes is required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text"}</p>
    </div>
    </>
    )
    
    //whatever the text we wre pasingshold as a variable
}
