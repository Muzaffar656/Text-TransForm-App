import React,{useState} from 'react'

 function TextForm(props) {
    const [text,setText] = useState('')

    const Uppercase = ()=>{
        let next = text.toUpperCase()
        setText(next)
        props.showAlert('UpperCase Has Been Added')
    }

    const Lowercase = ()=>{
        let next = text.toLowerCase()
        setText(next)
        props.showAlert('LowerCase Has Been Added')
        
    }

    const Clear = ()=>{
        let next = ''
        setText(next)
        props.showAlert('Text is Cleared')

    }

    const Capitialize = ()=>{
        let next = text.charAt(0).toUpperCase() + text.slice(1)
        setText(next)
        props.showAlert('Capitialize Has Been Added')

    }

    const event = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    {/* {props.showAlert   } */}
    <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea style={{backgroundColor : props.mode === 'light'?'white':'grey'}} onChange={event} value={text} className="form-control" id="myBox" rows="8"></textarea>
    <button onClick={Clear} className="btn btn-primary mt-3">Clear Text</button>
    <button onClick={Uppercase} className="btn btn-primary mt-3 mx-2">Convert To UpperCase</button>
    <button onClick={Lowercase} className="btn btn-primary mt-3 mx-2">Convert To LowerCase</button>
    <button onClick={Capitialize} className="btn btn-primary mt-3 mx-2">Convert To Capitialize</button>

    </div>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light'?'black':'white'}}>
        <h1>Your Text Summary </h1>
        <p>Words {text.split(" ").filter((element)=>{return element.length!==0 }).length} and {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return  element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>  
        <p>{text}</p>
    </div>
    </>
  )
}
export default TextForm;



