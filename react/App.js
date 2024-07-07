import './App.css';

const fName = "Irina";
const lName = "Sula";
const num = 9;
const currentYear = new Date().getFullYear();

const porkImg = "https://www.kitchensanctuary.com/wp-content/uploads/2018/10/Sticky-Chinese-Pork-Belly-tall1-6.webp";
const fishImg = "https://www.easychineserecipes.com/wp-content/uploads/2020/01/White-Fish-1-500x500.jpg";
const cakeImg = "https://i.ytimg.com/vi/5sK8p9HUOpI/maxresdefault.jpg";

const randomStyle = {
  color: "green",
  fontSize: "30px",
  border: "1px solid green"
}

function App() {
  return (
    <div>
    <h1 style={{ color: "purple" }}>Hello, {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {num}.</p>
    {/*  any JS expression can be in curly braces */}
    
    <p style = { randomStyle }>And your lucky random number is {Math.floor(Math.random() * 10)}.</p>

    <h2 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h2>
    <ul>
      <li><img className='square-img' src={porkImg} alt='' /></li>
      <li><img className='square-img' src={fishImg} alt=''/></li>
      <li><img className='square-img' src={cakeImg} alt='' /></li>
    </ul>
    
    <p>Created by {fName}.</p>
    <p>Copyright {currentYear}</p>
  </div>
  );
}

export default App;
