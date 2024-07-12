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
import notes from './notes.js';
import Time from './components/Time.jsx';
import Destructuring from './components/Destructuring.jsx';
import Todolist from './components/Todolist.jsx';

function createCard(contact) {
  return (
    <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Header />

      {notes.map(noteItem => 
        (
          <Note 
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}

      <Greeting />
    
      <LuckyNumber />
    
      <List />

      <Math />

      <Calculator />

      <Heading />
      {contacts.map(createCard)}

      {/* <Card 
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
      /> */}
      <Time />
      <Destructuring />
      <Todolist />
      <Footer />

  </div>
  );
}

export default App;

//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s