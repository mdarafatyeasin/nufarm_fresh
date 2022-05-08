import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
