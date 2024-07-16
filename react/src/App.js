import './App.css';

import Header from './components/Header.jsx';
import Keeper from './components/keeper_components/Keeper.jsx';
import Todolist from './components/todolist_components/Todolist.jsx';
import Time from './components/Time.jsx';
import Quote from './components/Quote.jsx';
import Music from './components/Music.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Keeper />
        <Todolist />
        <div className='side'>
          <Time />
          <Quote />
          <Music />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;