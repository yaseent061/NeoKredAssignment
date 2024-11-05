import './App.css';
import Editor from './components/Editor';
import Output from './components/Output';
import { useState } from 'react';

function App() {
  const [fieldData, setfieldData] = useState("")

  const handleDataChange =(val)=>{
    setfieldData(val)
  }

  return (
    <div className="App">
      <h1>HTML Editor</h1>
      <div className="Content">
        <Editor handleDataChange={handleDataChange} data={fieldData}/>
        <div className="Divider"></div>
        <Output data={fieldData}/>
      </div>
    </div>
  );
}

export default App;
