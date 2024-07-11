import './App.css';
import UsernameForm from './UsernameForm';
import SignupForm from './SignupForm';
import BetterSignupForm from './BetterSignupForm';
import ShoppingList from './ShoppingList';
import ReactHookForm from './ReactHookForm';

function App() {
  return (
    <div className="App">
      {/* <ReactHookForm /> */}
      <ShoppingList />
      {/* <BetterSignupForm />
      <UsernameForm />
      <SignupForm /> */}
    </div>
  );
}

export default App;
