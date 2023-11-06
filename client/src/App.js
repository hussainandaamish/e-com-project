import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Buynow from './components/Buynow/Buynow';
import Signin from './components/signup_signin/Signin';
import Cart from './components/cart/Cart';
import Signup from './components/signup_signin/Signup';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbaar/>
      <Newnav/>
      <Routes>
        <Route path='/' element={<Maincomp/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/getproductsone/:id' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
