import './App.css';
import Character from './components/characterlist'

function App(props) {
  const account = data;
  const loading = false;
  const error = "";
  return (
    <div className="App">
      <h1>Stupiddog's Account</h1>
      {
        loading ? <h3>We are loading the account</h3> : <Character account={account}/>
      }
    </div>
  );
}

export default App;
