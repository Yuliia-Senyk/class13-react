import './App.css';
import Message from "./Message";
import List from "./components/List";

function App() {
    let localVariable = 'local Variable';

  return (
    <div className="App">
        <List></List>


        <Message><i>Message</i> <b> <p>{localVariable}</p></b></Message>
    </div>
  );
}

export default App;
