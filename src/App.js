import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>To do list</h1>

<AddTask/>

<ListTask/>
      </header>
    </div>
  );
}

export default App;
