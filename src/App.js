import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import Utils from './components/Utils'
import React,{useState} from 'react'

function App() {


  const [mode,setmode] = useState('light')
  const changeMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('  Dark Mode has been Set  ', '  Success')
    }else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('  light Mode has been Set','Success')
    }
  }

  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    },5000)
  }

  return (
    <>
<Navbar title='Text Utilis'  mode={mode} changeMode={changeMode }  />
<Alert alert={alert}/>
<TextForm heading='Enter Your Text To Change Now' mode={mode} showAlert={showAlert}/>
<Utils/>

    </>
     );
}

export default App;

