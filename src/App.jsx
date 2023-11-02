import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import './App.css';

function App () {

  return (
    <div className="App">
      <Counter />
      <FetchData url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;
