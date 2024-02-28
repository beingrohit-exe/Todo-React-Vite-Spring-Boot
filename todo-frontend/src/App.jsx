import './App.css';
import TextField from './component/TextField';

const App = () => {
  return (
    <main>
      <h1 className="header">
        Todo Application
      </h1>

      <div className="form">
        <TextField label={'Name'} />
        <TextField label={'Email'} />
      </div>

      <div className="button-group">
        <button className="button">Reset</button>
        <button className="button">Submit</button>
      </div>
    </main>
  )
}

export default App