// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Hello />
      <Message msgCode='10' msgContent='This is a message from props'/>
      <Resume name='Jamey'></Resume>
      <Profile name='Jamey' lastName='Bryce'>
        <h3>This is a profile of a person</h3>
      </Profile>
      <Counter />
      <FunctionEvent />
      <ClassEvent />
      <FunctionalCounter />
      <ConditionalComponent />
      <List ordered={true} items={
        [
          {
            id: 1,
            name: 'Thing 1',
            price: 500
          },
          {
            id: 2,
            name: 'Thing 2',
            price: 800
          },
          {
            id: 3,
            name: "WTFLOL",
            price: 666
          } 
        ]
      } />
    </div>
  );
}

export default App;
