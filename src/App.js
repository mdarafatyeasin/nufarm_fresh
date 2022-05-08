import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import Inventorys from './Components/Inventorys/Inventorys/Inventorys';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventorys' element={<Inventorys></Inventorys>}></Route>
      </Routes>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
