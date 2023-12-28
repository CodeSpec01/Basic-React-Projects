import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("Something");
    
    const upClick = () => {
        setText(text.toUpperCase());
    }
    
    const loClick = () => {
        setText(text.toLowerCase());
    }
    
    const clearText = () => {
        setText('');
    }
    
    const copyText = () => {
        navigator.clipboard.writeText(text);
    }
    
    const changeHandle = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <h1 className='my-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="my-box" rows="8" value={text} onChange={changeHandle} autoFocus style={{backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={upClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={loClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
        
        <h1 className='my-4'>Your Text Summary</h1>
        <p>{text.split(/\s+/)[text.split(/\s+/).length -1] === ''? text.split(/\s+/).length -1 : text.split(/\s+/).length} words, {text.length} characters</p>

        <h1 className='my-4'>Preview</h1>
        <p>{text.length > 0 ? text : 'Enter something to preview here'}</p>
        </>
    )
}
