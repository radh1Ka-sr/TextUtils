import React, {useState} from 'react';

export default function About(props) {
    
    let toggleStyle=()=>{
        if(mystyle.color === 'black')
        {
            setMystyle({
               color:'white',
       backgroundColor:'black',
       
           });
           setBtntext("Enable dark mode");
           
        }
        else{
           setMystyle({
               color:'black',
               backgroundColor:'white',
              
           });
           setBtntext("Enable light mode");
        }
       }


    const [mystyle, setMystyle] = useState({
    color:'black',
    backgroundColor:'white',
    border:'2px solid white'
    });
    const [btntext, setBtntext] = useState("Enable dark mode");
   
  return (
    <div className="container my-3" style={mystyle}>
    <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header" style={mystyle}>
        <button className="accordion-button" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Point #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle}data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          <strong>This is a React based application designed to analyze your Text.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header" style={mystyle}>
        <button className="accordion-button collapsed" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Point #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong> User can perform many operations in in this application like copying the text,clearing the text,converting it into lowercase,uppercase,and one can also remove the extra spaces.
          It also count the number of words and characters in your text and display them on your window.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Point #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style={mystyle}data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          <strong>I have also designed the toggleMode option in which user can switch between the dark and the light mode according to their convenience.</strong>
        </div>
      </div>
    </div>
  </div>
  <button type="button" className="btn btn-primary my-1"  onClick={toggleStyle}>{btntext}</button>
  </div>
  );
}
