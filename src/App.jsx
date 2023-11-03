import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import './App.css';

function App () {

  return (
    <div className="App">
      <Counter />
      <FetchData url="https://jsonplaceholder.typicode.com/posts/" />
    </div>
  );
}

export default App;
