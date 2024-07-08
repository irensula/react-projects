import './App.css';
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import Footer from './components/Footer.jsx';

import Greeting from './components/Greeting.jsx';
import LuckyNumber from './components/LuckyNumber.jsx';
import List from './components/List.jsx';
import Heading from './components/Heading.jsx';
import Math from './components/Math.jsx';
import Calculator from './components/Calculator.jsx';
import Card from './components/Card.jsx';
import contacts from './contacts.js';

function App() {
  return (
    <div>
      <Header />

      <Note />

      <Greeting />
    
      <LuckyNumber />
    
      <List />

      <Math />

      <Calculator />

      <Heading />
      
      <Card 
        name = {contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name = {contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name = {contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />

      <Footer />

  </div>
  );
}

export default App;