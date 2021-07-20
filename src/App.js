import './App.css';
import TextAutoComplete from './TextAutoComplete';

function App() {
  const keyWords =  ["sin()", "cos()", "exp()", "tan()", "var1", "var2", "func1()"]
  return (
    <div className="textbox">
      <h3>Editor</h3>
      <TextAutoComplete func_list={keyWords}/>
    </div>
  ); 
}

export default App;
