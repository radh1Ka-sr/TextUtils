import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from"moment";
export default function TextForm(props) {
  
  const handleonclick1=()=>{
    let newText=Text.toUpperCase();
    setText(newText);
  }
  const handleonclick2=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
  }
  const handleonchange=(event)=>{
    setText(event.target.value);
  }
  const handlecopy=()=>{
    let text=document.getElementById("exampleFormControlTextarea1" );
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
   
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
}

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
}

  const [Text, setText] = useState('Enter text here');
  return (
    <>
   <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div className="disp">
      <div className="disp1"> <h1>{props.heading}</h1></div>
    
    <div className="disp2"><h5>{moment().format('ddd,Do,MMMM')}</h5></div>
    </div>
  <div className="mb-3">
    <textarea  className="form-control" value={Text}  onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}}id="exampleFormControlTextarea1" rows="8"></textarea>
   
<button disabled={Text.length===0} type="button" 
className="btn btn-dark mx-2 my-2" onClick={handleonclick1} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#042743'}}
     >Convert to uppercase</button>
    <button disabled={Text.length===0} type="button" className="btn btn-dark mx-2 my-2"
    style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#042743'}}
     onClick={handleonclick2}>Convert to lower case</button>
    <button disabled={Text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handlecopy} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#042743'}}>Copy Text</button>
    <button disabled={Text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleClearClick} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#042743'}}>Clear Text</button>
    <button disabled={Text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'#042743'}}>Remove Extra Spaces</button>
    
  </div>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>YOUR TEXT SUMMARY</h1>
    <p>{Text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {Text.length} characters</p>
    <h2>PREVIEW</h2>
    <p>{Text}</p>
  </div>
  </>
  );
}

