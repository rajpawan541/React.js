import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/Function';
import Classclick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Greet name="someone" heroName="Batman"></Greet>
      {/* <Greet name="golu" heroName="suoperman"></Greet>
      <Greet name="pak" heroName="wonderman"></Greet> */}
      {/* <Welcome></Welcome>
      <Message></Message>
      <Counter></Counter> */}
      <FunctionClick></FunctionClick>
      <Classclick></Classclick>
      <EventBind></EventBind>

   
    </div>
  );
}

export default App;
