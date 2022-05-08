import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login'
import Signup from './Components/Login/Signup/Signup'
import Blog from './Components/Blog/Blog'
import Inventorys from './Components/Inventorys/Inventorys/Inventorys';
import RuquairAuth from './Components/Login/RequairAuth/RuquairAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/inventorys' element={
          <RuquairAuth>
            <Inventorys></Inventorys>
          </RuquairAuth>
        }></Route>
      </Routes>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
