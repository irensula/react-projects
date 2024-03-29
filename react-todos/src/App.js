import './App.css';
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material
import CssBaseLine from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import NavBar from './NavBar';


function App() {
  return (
    <>
      <CssBaseLine />
      <NavBar />
      <TodoList />
    </>
  );
}

export default App;
