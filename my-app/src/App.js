import React, { useState } from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';

      setbgDark({
        color: 'white',
        backgroundColor: '#343a40'
      }
      );
      setoutlineDark({
        color: 'white',
        backgroundColor: '#343a40',
        border: '1px solid white'
      }
      );

    } else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';

      setbgDark({
        color: 'black',
        backgroundColor: 'white'
      }
      );
      setoutlineDark({
        color: 'black',
        backgroundColor: 'white',
      }
      );
    }
  }

  const [bgDark, setbgDark] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [outlineDark, setoutlineDark] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter your text" mode={mode} />
        <About toggleMode={toggleMode} bgDark={bgDark} outlineDark={outlineDark} />
      </div>

    </>
  );
}

export default App;
