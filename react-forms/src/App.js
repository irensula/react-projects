import './App.css';
import Form from './components/Form';
import Formnew from './components/Formnew';

// let isLoggeIn = true;
let userIsRegistered = false;

function App() {
  return (
    <div className='container'>
      <Form isRegistered={userIsRegistered}/>
      <Formnew />
    </div>
  );
}

export default App;
