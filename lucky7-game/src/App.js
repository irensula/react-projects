import './App.css';
import LuckyN from "./LuckyN";
import { sum } from './utils';

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  // compare every element in array with first element [0]
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} title='Roll less than 4'/>
      <LuckyN
      winCheck={allSameValue}
      numDice={3}
      title='Roll the same number'/>
    </>    
  );
}

export default App;
